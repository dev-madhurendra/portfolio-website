from pydantic import BaseModel, validator


class RequestSkill(BaseModel):
    name: str
    level: int

    @validator("level")
    def validate_level(cls, value):
        if not 1 <= value <= 100:
            raise ValueError("Level must be between 1 and 100")
        return value
    
    
class ResponseSkill(RequestSkill):
    id: int