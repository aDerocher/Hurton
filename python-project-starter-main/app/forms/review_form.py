import flask
from flask_wtf import FlaskForm
from wtforms import StringField, DateField, IntegerField
from wtforms.validators import DataRequired
from datetime import datetime


class NewReviewForm(FlaskForm):
    item_id = IntegerField('Item_id', validators=[DataRequired()])
    user_id = IntegerField('User_id', validators=[DataRequired()])
    # user_name = StringField('User_name', validators=[DataRequired()])
    rating = IntegerField('Rating', validators=[DataRequired()])
    title = StringField('Title', validators=[DataRequired()])
    content = StringField('Content', validators=[DataRequired()])
    created_at = DateField('Is_history', default=datetime.utcnow)
    updated_at = DateField('Is_history', default=datetime.utcnow)


class EditReviewForm(FlaskForm):
    rating = IntegerField('Rating', validators=[DataRequired()])
    title = StringField('Title', validators=[DataRequired()])
    content = StringField('Content', validators=[DataRequired()])
    updated_at = DateField('Is_history', default=datetime.utcnow)