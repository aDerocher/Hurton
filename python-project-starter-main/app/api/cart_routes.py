from flask import Blueprint, jsonify, request
from app.models import Cart, CartItem
from app.forms import AddItemToCartForm

cart_routes = Blueprint('carts', __name__)


@cart_routes.route('', methods=['GET'])
def all_cart_items():
    cart = Cart.query.all()
    return {'items': [item.to_dict() for item in items]}


@cart_routes.route('/add-item',methods=['POST'])
def add_to_cart():
    form = AddItemToCartForm()
    form["csrf_token"].data = request.cookies["csrf_token"]
    if form.validate():
        new_cart_item = CartItem(
            user_id= form.user_id.data,
            item_id= form.item_id.data,
            item_name= form.item_name.data,
            item_color= form.item_color.data,
            item_size= form.item_size.data,
            item_price= form.item_price.data,
            quantity= form.quantity.data,
        )
        db.session.add(new_cart_item)
        db.session.commit()

        return { 'cart_item': [new_cart_item.to_dict()] }
