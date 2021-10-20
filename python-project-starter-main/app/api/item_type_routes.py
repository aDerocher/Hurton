from flask import Blueprint, jsonify
from app.models import ItemType

item_type_routes = Blueprint('item_types', __name__)


@item_type_routes.route('', methods=['GET'])
def all_item_types():
    item_types = ItemType.query.all()
    return {'item_types': [ item_type.to_dict() for item_type in item_types ] }


# @item_type_routes.route('/<int:item_type_id>',methods=['GET'])
# def one_item_type(item_type_id):
#     item_type = ItemType.query.get(item_type_id)
#     return { 'item_type': [item_type.to_dict()] }
