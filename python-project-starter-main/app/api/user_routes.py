from flask import Blueprint, jsonify
from flask_login import login_required
from app.models import User, CartItem, Cart

user_routes = Blueprint('users', __name__)


@user_routes.route('')
@login_required
def users():
    users = User.query.all()
    return {'users': [user.to_dict() for user in users]}


@user_routes.route('/<int:id>')
@login_required
def user(id):
    user = User.query.get(id)
    return user.to_dict()


@user_routes.route('/<int:user_id>/cart', methods=['GET'])
def all_cart_items(user_id):
    cart = Cart.query.filter(Cart.owner_id == user_id)
    print('------------', cart,  '------------------------------------------------------')
    cartItems = CartItem.query.filter(CartItem.cart_id == cartAsDict.id)
    return { 'cart_items': [cart_item.to_dict() for cart_item in cartItems] }

