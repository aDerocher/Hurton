from .db import db
from datetime import datetime


class CartItem(db.Model):
    __tablename__ = 'cart_items'

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)
    item_id = db.Column(db.Integer, db.ForeignKey("items.id"), nullable=False)
    item_name = db.Column(db.String(255), nullable=False)
    item_color = db.Column(db.String(255), nullable=False)
    item_size = db.Column(db.String(255))
    item_price = db.Column(db.String(2000), nullable=False)
    item_image = db.Column(db.String(2000), nullable=False)
    quantity = db.Column(db.Integer, default=1)
    created_at = db.Column(db.DateTime(), default=datetime.utcnow)
    is_history = db.Column(db.Boolean, default=False)

    def to_dict(self):
        return {
            'id': self.id,
            'user_id': self.user_id,
            'item_id': self.item_id,
            'item_name': self.item_name,
            'item_color' : self.item_color,
            'item_size' : self.item_size,
            'created_at': self.created_at,
            'item_price' : self.item_price,
            'item_image' : self.item_image,
            'quantity' : self.quantity,
            'is_history' : self.is_history,
        }
