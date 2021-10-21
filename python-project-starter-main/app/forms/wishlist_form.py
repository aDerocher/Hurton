import flask
from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField
from wtforms.validators import DataRequired

class NewWishlistItemForm(FlaskForm):
    user_id = IntegerField('User_id')
    item_id = IntegerField('Item_id')
    item_color = StringField('Item_color')
    item_size = StringField('Item_size')