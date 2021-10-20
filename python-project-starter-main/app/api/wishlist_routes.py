from flask import Blueprint, jsonify
from app.models import WishlistItem
from app.forms import NewWishlistItemForm


wishlist_routes = Blueprint('wishlists', __name__)


@wishlist_routes.route('/', methods=['GET'])
def all_wishlist_items(user_id):
    wishlist = WishlistItem.query.filter(Wishlist.user_id == user_id)
    return {'wishlist_items': [wl_item.to_dict() for wl_item in wishlist_items]}


@wishlist_routes.route('/add-item',methods=['POST'])
def add_to_wishlist():
    form = NewWishlistItemForm()
    form["csrf_token"].data = request.cookies["csrf_token"]

    if form.validate_on_submit():
        new_wishlist_item = WishlistItem(
            user_id= form.user_id,
            item_id= form.item_id,
            item_color= form.item_color,
            item_size= form.item_size,
        )
        db.session.add(new_wishlist_item)
        db.session.commit()

        return new_ink.to_dict()
