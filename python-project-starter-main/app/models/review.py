from .db import db
from datetime import datetime

class Review(db.Model):
    __tablename__ = 'reviews'

    id = db.Column(db.Integer, primary_key=True)
    item_id = db.Column(db.Integer, db.ForeignKey("items.id"), nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)
    # user_firstName = db.Column(db.String(50))
    rating = db.Column(db.Integer, nullable=False) 
    title = db.Column(db.String(50))
    content = db.Column(db.String(400), nullable=False) 
    created_at = db.Column(db.DateTime(), default=datetime.utcnow)
    updated_at = db.Column(db.DateTime(), default=datetime.utcnow)


    def to_dict(self):
        return {
            'id': self.id,
            'item_id': self.item_id,
            'user_id': self.user_id,
            # 'user_firstName': self.user_firstName,
            'rating': self.rating,
            'title': self.title,
            'content': self.content, 
            'created_at': self.created_at,
            'updated_at': self.updated_at,
        }