from db.session import Base
from sqlalchemy import Column, Integer, String

class Message(Base):
    __tablename__ = "message"
    id = Column(Integer,primary_key=True,autoincrement=True)
    name = Column(String(length=255), nullable=False)
    email = Column(String(length=255), nullable=False)
    description = Column(String(length=555), nullable=False)