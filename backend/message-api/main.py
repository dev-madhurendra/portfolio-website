from fastapi import Depends, FastAPI, HTTPException, status
# models for creating table
import model.message as models
# schema for request and response
import schema.message as schemas
from sqlalchemy.orm import Session
from typing import List
# database connection
from db.db_connection import get_db
# databse session engine
from db.session import engine
# constant module
from utils.constant import MESSAGES_API_BASE_URL


# creating instance of fastapi
app = FastAPI()

# create all the schemas in databases
models.Base.metadata.create_all(bind = engine)

# Create Message
@app.post(MESSAGES_API_BASE_URL, response_model=schemas.RequestMessage, status_code=status.HTTP_201_CREATED)
def sendMessage(request: schemas.RequestMessage,db: Session = Depends(get_db)):
    new_message = models.Message(name=request.name,email=request.email,description=request.description)
    db.add(new_message)
    db.commit()
    db.refresh(new_message)
    return new_message
    
# Get All Messages
@app.get(MESSAGES_API_BASE_URL, response_model=List[schemas.ResponseMessage], status_code=status.HTTP_200_OK)
def getMessages(db: Session = Depends(get_db)):
    messages = db.query(models.Message).all()
    return messages

# Get Message By Id
@app.get(MESSAGES_API_BASE_URL + "/{id}", response_model=schemas.ResponseMessage, status_code=status.HTTP_200_OK)
def getMessages(id: int, db: Session = Depends(get_db)):
    message = db.query(models.Message).filter(models.Message.id == id).first()
    if not message:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail=f'Message with ID {id} not found')
    return message;

# Delete Message
@app.delete(MESSAGES_API_BASE_URL + "/{id}", status_code=status.HTTP_204_NO_CONTENT)
def delete_message(id: int, db: Session = Depends(get_db)):
    message = db.query(models.Message).filter(models.Message.id == id).first()
    if not message:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail=f'Message with ID {id} not found')
    db.delete(message)
    db.commit()
    return {"detail": f"Message with ID {id} deleted successfully"}
        



        