from .db import db
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin
from datetime import datetime


class User(db.Model, UserMixin):
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(255), nullable=False, unique=True)
    hashed_password = db.Column(db.String(255), nullable=False)
    firstName = db.Column(db.String(50), nullable=False) 
    lastName = db.Column(db.String(50), nullable=False)
    email = db.Column(db.String(255), nullable=False) 
    dob = db.Column(db.DateTime()) 
    address = db.Column(db.String(255)) 
    creditcard = db.Column(db.String(27)) 
    created_at = db.Column(db.DateTime(), default=datetime.utcnow) 
    updated_at = db.Column(db.DateTime(), default=datetime.utcnow) 


    @property
    def password(self):
        return self.hashed_password

    @password.setter
    def password(self, password):
        self.hashed_password = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.password, password)

    def to_dict(self):
        return {
            'id': self.id,
            'firstName': self.firstName,
            'lastName': self.lastName,
            'email': self.email
        }
