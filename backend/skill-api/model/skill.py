from sqlalchemy import Column, Integer, String
from db.session import Base


class Skill(Base):
    __tablename__ = "skill"
    id = Column(Integer, primary_key=True, index=True)
    name = Column(String(length=255))
    level = Column(Integer)