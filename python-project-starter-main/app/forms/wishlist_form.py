import flask
from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField
from wtforms.validators import DataRequired

class NewWishlistItemForm(FlaskForm):
    user_id = IntegerField('User_id', validators=[DataRequired()])
    item_id = IntegerField('Item_id', validators=[DataRequired()])
    item_name = StringField('Item_name', validators=[DataRequired()])
    item_color = StringField('Item_color', validators=[DataRequired()])
    item_gender = StringField('Item_color', validators=[DataRequired()])
    item_size = StringField('Item_size', validators=[DataRequired()]) 
    item_price = IntegerField('Item_price', validators=[DataRequired()])
    item_image = StringField('Item_image', validators=[DataRequired()])