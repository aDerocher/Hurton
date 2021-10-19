from .db import db
from datetime import datetime


class Item(db.Model):
    __tablename__ = 'items'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(255), nullable=False)
    price = db.Column(db.Integer, nullable=False)
    size = db.Column(db.String(255), nullable=False)
    gender = db.Column(db.String(255), nullable=False)
    color = db.Column(db.String(255), nullable=False)

    item_type = db.Column(db.Integer, db.ForeignKey("item_types.id"), nullable=False)
    
    # boards ===============================
    personality = db.Column(db.Integer)
    terrain = db.Column(db.Integer)
    # boots ==================================
    lacing = db.Column(db.String)
    stiffness = db.Column(db.Integer)
    # bindings ===============================
    response = db.Column(db.Integer)
    # jackets + pants + clothes ================
    warmth = db.Column(db.Integer)
    waterproofing = db.Column(db.Integer) 


    @property
    def type_of(self):
        return self.item_type

    def to_dict(self):
        return {
            'id': self.id,
            'size': self.size,
            'name': self.name,
            'price': self.price,
            'color': self.color,
            'gender': self.gender,
            'item_type': self.item_type,

            'terrain': self.terrain,
            'personality': self.personality,
            
            'response' : self.response,
            'stiffness' : self.stiffness,

            'warmth': self.wamth,
            'waterproofing': self.waterproofing,
           
            'lacing': self.lacing,
        }
