from flask import Blueprint, jsonify
from app.models import Item, Review

item_routes = Blueprint('reviews', __name__)


@item_routes.route('', methods=['GET'])
def all_items():
    items = Item.query.all()
    return {'items': [item.to_dict() for item in items]}


@item_routes.route('/<int:item_id>',methods=['GET'])
def one_item(item_id):
    item = Item.query.get(item_id)
    return { 'item': item.to_dict() }

    
# @item_routes.route('/<int:item_type>',methods=['GET'])
# ========== might be an error in this route. check when implimenting (item_type ^^ vs item_id vv) =================
# def items_by_type(item_id):
#     items = Item.query.filter(Item.item_type == item_type)
#     return { 'items': [item.to_dict() for item in items] }

@item_routes.route('/<int:item_id>/reviews',methods=['GET'])
def item_reviews(item_id):
    reviews = Review.query.filter(Review.item_id == item_id)
    print(reviews, '+++++++++++++++++++++++++++++==============================++++++++++++++++++++++++++++++++++++++++++++++++++++++')
    return { 'reviews': [review.to_dict() for review in reviews] }
