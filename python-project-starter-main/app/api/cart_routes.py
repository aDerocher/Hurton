from flask import Blueprint, jsonify, request
from app.models import Cart, CartItem, db
from app.forms import AddItemToCartForm, EditCartItemForm
from flask_login import login_required, current_user

cart_routes = Blueprint('carts', __name__)

# @cart_routes.route('', methods=['GET'])
# def all_cart_items():
#     cart = Cart.query.all()
#     return {'items': [item.to_dict() for item in items]}

@cart_routes.route('/add-item',methods=['POST'])
@login_required
def add_to_cart():
    form = AddItemToCartForm()
    form["csrf_token"].data = request.cookies["csrf_token"]
    if form.validate():
        new_cart_item = CartItem(
            user_id=current_user.get_id(),
            item_id=form.item_id.data,
            item_name=form.item_name.data,
            item_color=form.item_color.data,
            item_gender=form.item_gender.data,
            item_size=form.item_size.data,
            item_price=form.item_price.data,
            item_image=form.item_image.data,
            quantity=form.quantity.data,
        )
        db.session.add(new_cart_item)
        db.session.commit()

        return { 'cart_item': new_cart_item.to_dict() }
    return {"errors": True}


@cart_routes.route('/<int:cartItem_id>',methods=['PATCH'])
@login_required
def edit_cart(cartItem_id):
    cart_item = CartItem.query.get(cartItem_id)
    form = EditCartItemForm()
    form["csrf_token"].data = request.cookies["csrf_token"]
    if current_user and form.validate_on_submit():
        cart_item.quantity = form.quantity.data
        cart_item.is_history = form.is_history.data
        db.session.commit()
        return { 'cart_item': cart_item.to_dict() }
    return {"errors": True}



@cart_routes.route('/<int:cartItem_id>',methods=['DELETE'])
@login_required
def remove_from_cart(cartItem_id):
    cart_item = CartItem.query.get(cartItem_id)
    db.session.delete(cart_item)
    db.session.commit()
    return { 'cart_item': cart_item.to_dict() }
