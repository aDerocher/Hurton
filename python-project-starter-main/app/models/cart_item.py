from .db import db
from datetime import datetime


class CartItem(db.Model):
    __tablename__ = 'cart_items'

    id = db.Column(db.Integer, primary_key=True)
    cart_id = db.Column(db.Integer, db.ForeignKey("carts.id"), nullable=False)
    item_id = db.Column(db.Integer, db.ForeignKey("items.id"), nullable=False)
    item_color = db.Column(db.String(255), nullable=False)
    item_size = db.Column(db.String(255))
    item_price = db.Column(db.Integer, nullable=False)
    item_quantity = db.Column(db.Integer, default=1)
    # item_image = db.Column(db.String(255), nullable=False)
    created_at = db.Column(db.DateTime(), default=datetime.utcnow)


    def to_dict(self):
        return {
            'id': self.id,
            'cart_id': self.cart_id,
            'item_id': self.item_id,
            'item_color' : self.item_color,
            'item_size' : self.item_size,
            'created_at': self.created_at,
            'item_price' : self.item_price,
            'quantity' : self.quantity,
             #'item_image': self.item_image
        }
