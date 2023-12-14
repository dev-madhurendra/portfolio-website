from pydantic import BaseModel, EmailStr

class RequestMessage(BaseModel):
    name: str
    email: EmailStr
    description: str


class ResponseMessage(RequestMessage):
    id: int