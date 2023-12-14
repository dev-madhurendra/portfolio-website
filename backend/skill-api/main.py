from fastapi import FastAPI, HTTPException, status, Depends
from sqlalchemy.orm import Session
import schema.skill as schemas
from typing import List
from utils.constants import SKILL_API_BASE_URL
import model.skill as models
from db.db_connection import get_db
from db.session import engine

app = FastAPI()

models.Base.metadata.create_all(bind = engine)

# create skill
@app.post(SKILL_API_BASE_URL,response_model=schemas.ResponseSkill, status_code=status.HTTP_201_CREATED)
def addSkill(request: schemas.RequestSkill,db: Session = Depends(get_db)):
    new_skill = models.Skill(name = request.name, level = request.level)
    db.add(new_skill)
    db.commit()
    # If you want to discard the local changes and update the object with the latest values from the database
    # db.refresh(new_skill)
    return new_skill



@app.get(SKILL_API_BASE_URL, response_model=List[schemas.ResponseSkill], status_code=status.HTTP_200_OK)
def getSkills(db: Session = Depends(get_db)):
    skills = db.query(models.Skill).all()
    return skills

# get skill by id
@app.get(SKILL_API_BASE_URL + "/{skill_id}", response_model=schemas.ResponseSkill, status_code=status.HTTP_200_OK)
def getSkillById(skill_id: int, db: Session = Depends(get_db)):
    skill = db.query(models.Skill).filter(models.Skill.id == skill_id).first()
    if not skill:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail=f'Skill with ID {skill_id} not found')
    return skill
    
# delete skill by id
@app.delete(SKILL_API_BASE_URL + "/{skill_id}", status_code=status.HTTP_204_NO_CONTENT)
def deleteSkillById(skill_id: int, db: Session = Depends(get_db)):
    skill = db.query(models.Skill).filter(models.Skill.id == skill_id).first()
    if not skill:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail=f'Skill with ID {skill_id} not found')
    db.delete(skill)
    db.commit()
    return f"Skill with ID {skill_id} deleted succesfully !"


# update skill by id
@app.put(SKILL_API_BASE_URL + "/{skill_id}", response_model=schemas.ResponseSkill, status_code=status.HTTP_200_OK)
def updateSkillById(skill_id: int, request: schemas.RequestSkill, db: Session = Depends(get_db)):
    skill = db.query(models.Skill).filter(models.Skill.id == skill_id).first()
    if not skill:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail=f'Skill with ID {skill_id} not found')

    # Update the skill with the new values
    skill.name = request.name
    skill.level = request.level

    db.commit()
    return skill
