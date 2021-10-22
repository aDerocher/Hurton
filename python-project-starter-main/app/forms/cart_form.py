import flask
from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField, BooleanField
from wtforms.validators import DataRequired

class AddItemToCartForm(FlaskForm):
    # user_id = IntegerField('User_id', validators=[DataRequired()])
    item_id = IntegerField('Item_id', validators=[DataRequired()])
    item_name = StringField('Item_name', validators=[DataRequired()])
    item_color = StringField('Item_color', validators=[DataRequired()])
    item_size = StringField('Item_size', validators=[DataRequired()])
    item_price = IntegerField('Item_price', validators=[DataRequired()])
    item_image = StringField('Item_image', validators=[DataRequired()])
    quantity = IntegerField('Quantity', default=1)


class EditCartItemForm(FlaskForm):
    # item_id = IntegerField('Item_id', validators=[DataRequired()])
    # item_name = StringField('Item_name', validators=[DataRequired()])
    # item_color = StringField('Item_color', validators=[DataRequired()])
    # item_size = StringField('Item_size', validators=[DataRequired()])
    # item_price = IntegerField('Item_price', validators=[DataRequired()])
    is_history = BooleanField('Is_history', default=False)
    quantity = IntegerField('Quantity', default=1)
