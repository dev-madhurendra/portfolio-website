from typing import Optional
from pydantic import BaseModel
from datetime import date

class RequestExperience(BaseModel):
    title: str
    company: str
    location: str
    start_date: date
    end_date: Optional[date]
    description: str
    technologies: str
    
class ResponseExperience(RequestExperience):
    id: int

    class Config:
        orm_mode = True