from sqlalchemy import Column, Integer, String, Date
from db.session import Base

class Experience(Base):
    __tablename__ = "experience"

    id = Column(Integer, primary_key=True, index=True)
    title = Column(String(length=255))
    company = Column(String(length=500))
    location = Column(String(length=500))
    start_date = Column(Date)
    end_date = Column(Date,nullable=True)
    description = Column(String(length=500))
    technologies = Column(String(1000))
