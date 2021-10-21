from flask import Blueprint, jsonify
from app.models import Cart

cart_routes = Blueprint('carts', __name__)


@cart_routes.route('/', methods=['GET'])
def all_cart_items():
    cart = Cart.query.all()
    return {'items': [item.to_dict() for item in items]}


# @cart_routes.route('/<int:item_id>',methods=['GET'])
# def add_to_cart(item_id):
#     item = Item.query.get(item_id)
#     return { 'item': item.to_dict() }
