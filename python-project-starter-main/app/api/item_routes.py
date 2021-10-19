from flask import Blueprint, jsonify
from flask_login import login_required
from app.models import User, Item

item_routes = Blueprint('items', __name__)


@item_routes.route('/', methods=['GET'])
def all_items():
    items = Item.query.all()
    return {'items': [item.to_dict() for item in items]}


# @item_routes.route('/<item_id:id>',methods=['GET'])
# def one_item(id):
#     item = Item.query.get(item_id)
#     return item.to_dict()
