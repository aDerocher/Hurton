from flask import Blueprint, jsonify, request
from app.models import db, WishlistItem
from app.forms import NewWishlistItemForm


wishlist_routes = Blueprint('wishlists', __name__)


@wishlist_routes.route('/<int:user_id>', methods=['GET'])
def users_wishlist(user_id):
    wishlist_items = WishlistItem.query.filter(WishlistItem.user_id == user_id)
    return {'wishlist_items': [wl_item.to_dict() for wl_item in wishlist_items]}


@wishlist_routes.route('/add-item',methods=['POST'])
def add_to_wishlist():
    form = NewWishlistItemForm()
    form["csrf_token"].data = request.cookies["csrf_token"]
    if form.validate_on_submit():
        new_wishlist_item = WishlistItem(
            user_id= form.user_id.data,
            item_id= form.item_id.data,
            item_name= form.item_name.data,
            item_color= form.item_color.data,
            item_size= form.item_size.data,
        )
        db.session.add(new_wishlist_item)
        db.session.commit()

        return {'wishlist_item': [new_wishlist_item.to_dict()]}


@wishlist_routes.route('/<int:wl_item_id>', methods=['DELETE'])
def remove_wishlist_item(wl_item_id):
    wl_item = WishlistItem.query.get(wl_item_id)
    db.session.delete(wl_item)
    db.session.commit()
    return {'wishlist_item': wl_item.to_dict() }