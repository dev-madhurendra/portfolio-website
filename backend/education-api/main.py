from fastapi import FastAPI, HTTPException, status, Depends
from sqlalchemy.orm import Session
from typing import List
from schema.education import RequestEducation, ResponseEducation
from db.db_connection import get_db
from utils.constants import EDUCATION_API_BASE_URL
from db.session import engine
import model.education as models

app = FastAPI()

models.Base.metadata.create_all(bind=engine)

# Create education
@app.post(EDUCATION_API_BASE_URL, response_model=ResponseEducation, status_code=status.HTTP_201_CREATED)
def create_education(request: RequestEducation, db: Session = Depends(get_db)):
    new_education = models.Education(**request.model_dump())
    db.add(new_education)
    db.commit()
    db.refresh(new_education)
    return new_education

# Get all educations
@app.get(EDUCATION_API_BASE_URL, response_model=List[ResponseEducation], status_code=status.HTTP_200_OK)
def get_educations(db: Session = Depends(get_db)):
    educations = db.query(models.Education).all()
    return educations

# Get education by id
@app.get(EDUCATION_API_BASE_URL + "/{education_id}", response_model=ResponseEducation, status_code=status.HTTP_200_OK)
def get_education_by_id(education_id: int, db: Session = Depends(get_db)):
    education = db.query(models.Education).filter(models.Education.id == education_id).first()
    if not education:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail=f'Education with ID {education_id} not found')
    return education

# Update education by id
@app.put(EDUCATION_API_BASE_URL + "/{education_id}", response_model=ResponseEducation, status_code=status.HTTP_200_OK)
def update_education(education_id: int, request: RequestEducation, db: Session = Depends(get_db)):
    education = db.query(models.Education).filter(models.Education.id == education_id).first()
    if not education:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail=f'Education with ID {education_id} not found')

    # Update the education with the new values
    for field, value in request.model_dump().items():
        setattr(education, field, value)

    db.commit()
    db.refresh(education)
    return education

# Delete education by id
@app.delete(EDUCATION_API_BASE_URL + "/{education_id}", status_code=status.HTTP_204_NO_CONTENT)
def delete_education(education_id: int, db: Session = Depends(get_db)):
    education = db.query(models.Education).filter(models.Education.id == education_id).first()
    if not education:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail=f'Education with ID {education_id} not found')
    db.delete(education)
    db.commit()
    return f"Education with ID {education_id} deleted successfully!"
