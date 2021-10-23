from flask import Blueprint, jsonify, request
from app.models import Item, Review, db
from app.forms import NewReviewForm, EditReviewForm
from flask_login import login_required, current_user

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


# =============== REVIEWS item routes ==========================
@item_routes.route('/<int:item_id>/reviews',methods=['GET'])
def item_reviews(item_id):
    reviews = Review.query.filter(Review.item_id == item_id)
    print(reviews, '+++++++++++++++++++++++++++++==============================++++++++++++++++++++++++++++++++++++++++++++++++++++++')
    return { 'reviews': [review.to_dict() for review in reviews] }

# Leave a new review on a product
@item_routes.route('/<int:item_id>/new-review',methods=['POST'])
@login_required
def new_review(item_id):
    form = NewReviewForm()
    form["csrf_token"].data = request.cookies["csrf_token"]
    if current_user and form.validate_on_submit():
        new_review = Review(
            user_id= current_user.get_id(),
            item_id= form.item_id.data,
            rating= form.rating.data,
            title= form.title.data,
            content= form.content.data,
        )
        db.session.add(new_review)
        db.session.commit()
        # print(reviews, '+++++++++++++++++++++++++++++==============================++++++++++++++++++++++++++++++++++++++++++++++++++++++')
        return { 'new_review': new_review.to_dict()}
    return { 'errors': 'there was an error with new-review route' }

# Edit an existing Review   
# @item_routes.route('/<int:item_id>/new-review',methods=['PATCH'])
# @login_required
# def item_reviews(item_id):
    # reviews = Review.query.filter(Review.item_id == item_id)
    # print(reviews, '+++++++++++++++++++++++++++++==============================++++++++++++++++++++++++++++++++++++++++++++++++++++++')
    # return { 'reviews': [review.to_dict() for review in reviews] }
