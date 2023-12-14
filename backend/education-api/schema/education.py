from typing import Optional
from pydantic import BaseModel
from datetime import date

class RequestEducation(BaseModel):
    title: str
    school: str
    location: str
    start_date: date
    end_date: Optional[date]
    percentage: str
    description: str
    
class ResponseEducation(RequestEducation):
    id: int

    class Config:
        orm_mode = True