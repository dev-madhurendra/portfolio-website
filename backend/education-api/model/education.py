from sqlalchemy import Column, Integer, String, Date
from db.session import Base

class Education(Base):
    __tablename__ = "education"

    id = Column(Integer, primary_key=True, index=True)
    title = Column(String(length=255))
    school = Column(String(length=500))
    location = Column(String(length=500))
    start_date = Column(Date)
    end_date = Column(Date,nullable=True)
    percentage = Column(String(length=500))
    description = Column(String(length=500), nullable=True)