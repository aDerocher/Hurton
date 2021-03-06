from .db import db
from datetime import datetime


class WishlistItem(db.Model):
    __tablename__ = 'wishlist_items'

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)
    item_id = db.Column(db.Integer, db.ForeignKey("items.id"), nullable=False)
    item_name = db.Column(db.String(255), nullable=False)
    item_color = db.Column(db.String(255), nullable=False)
    item_gender = db.Column(db.String(255), nullable=False)
    item_size = db.Column(db.String(255))
    item_price = db.Column(db.String(255))
    item_image = db.Column(db.String(2000))
    created_at = db.Column(db.DateTime(), default=datetime.utcnow)

    # @property
    # def owner(self):
    #     return self.user_id

    def to_dict(self):
        return {
            'id': self.id,
            'user_id': self.user_id,
            'item_id': self.item_id,
            'item_name' : self.item_name,
            'item_color' : self.item_color,
            'item_gender' : self.item_gender,
            'item_size' : self.item_size,
            'item_price' : self.item_price,
            'item_image' : self.item_image,
            'created_at': self.created_at,
        }
