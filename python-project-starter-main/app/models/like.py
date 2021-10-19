from .db import db


class Like(db.Model):
    __tablename__ = 'likes'

    id = db.Column(db.Integer, primary_key=True)
    value = db.Column(db.Boolean)


    def to_dict(self):
        return {
            'id': self.id,
            'value': self.value,
        }