from utils.constants import EXP_API_BASE_URL
from fastapi import Depends, FastAPI, HTTPException, status
from sqlalchemy.orm import Session
import model.experience as models
import schema.experience as schemas
from typing import List
from db.session import engine
from db.db_connection import get_db


app = FastAPI()

models.Base.metadata.create_all(bind=engine)

# Create Experience
@app.post(EXP_API_BASE_URL, response_model=schemas.ResponseExperience, status_code=status.HTTP_201_CREATED)
def create_experience(request: schemas.RequestExperience, db: Session = Depends(get_db)):
    new_experience = models.Experience(**request.model_dump())
    db.add(new_experience)
    db.commit()
    return new_experience


# Get All Experiences
@app.get(EXP_API_BASE_URL, response_model=List[schemas.ResponseExperience], status_code=status.HTTP_200_OK)
def get_all_experiences(db: Session = Depends(get_db)):
    experiences = db.query(models.Experience).all()
    return experiences


@app.get(EXP_API_BASE_URL+"/{experience_id}", response_model=schemas.ResponseExperience, status_code=status.HTTP_200_OK)
def get_experience(experience_id: int, db: Session = Depends(get_db)):
    experience = db.query(models.Experience).filter(models.Experience.id == experience_id).first()
    if not experience:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail=f'Experience with ID {experience_id} not found')
    return experience


@app.put(EXP_API_BASE_URL+"/{experience_id}", response_model=schemas.ResponseExperience, status_code=status.HTTP_200_OK)
def update_experience(experience_id: int, request: schemas.RequestExperience, db: Session = Depends(get_db)):
    experience = db.query(models.Experience).filter(models.Experience.id == experience_id).first()
    if not experience:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail=f'Experience with ID {experience_id} not found')

    for key, value in request.model_dump().items():
        setattr(experience, key, value)

    db.commit()
    # db.refresh(experience)
    return experience


# Delete Experience
@app.delete(EXP_API_BASE_URL+"/{experience_id}", status_code=status.HTTP_204_NO_CONTENT)
def delete_experience(experience_id: int, db: Session = Depends(get_db)):
    experience = db.query(models.Experience).filter(models.Experience.id == experience_id).first()
    if not experience:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail=f'Experience with ID {experience_id} not found')

    db.delete(experience)
    db.commit()
    return {"detail": f"Experience with ID {experience_id} deleted successfully"}