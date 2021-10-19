from .db import db
from datetime import datetime


class WishlistItem(db.Model):
    __tablename__ = 'wishlist_items'

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)
    item_id = db.Column(db.Integer, db.ForeignKey("items.id"), nullable=False)
    item_color = db.Column(db.String(255), nullable=False)
    item_size = db.Column(db.String(255))
    created_at = db.Column(db.DateTime(), default=datetime.utcnow)

    # @property
    # def owner(self):
    #     return self.user_id

    def to_dict(self):
        return {
            'id': self.id,
            'user_id': self.user_id,
            'item_id': self.item_id,
            'item_color' : self.item_color,
            'item_size' : self.item_size,
            'created_at': self.created_at,
        }
