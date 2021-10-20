from .db import db


class ItemType(db.Model):
    __tablename__ = 'item_types'

    id = db.Column(db.Integer, primary_key=True)
    item_type = db.Column(db.String(255), nullable=False)

    @property
    def type_of(self):
        return self.item_type

    def to_dict(self):
        return {
            'id': self.id,
            'item_type': self.item_type,
        }