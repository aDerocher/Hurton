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
@item_routes.route('/<int:item_id>/reviews/<int:review_id>',methods=['PATCH'])
@login_required
def edit_review(item_id, review_id):
    review = Review.query.get(review_id)
    print(review, '+++++++++++++++++++++++++++++==============================++++++++++++++++++++++++++++++++++++++++++++++++++++++')
    form = EditReviewForm()
    form["csrf_token"].data = request.cookies["csrf_token"]
    if current_user and form.validate_on_submit():
        review.rating= form.rating.data,
        review.title= form.title.data,
        review.content= form.content.data,
        db.session.commit()
        return { 'review': review.to_dict() }

# Delete an existing Review   
@item_routes.route('/<int:item_id>/reviews/<int:review_id>',methods=['DELETE'])
@login_required
def delete_review(review_id, item_id):
    dead_review = Review.query.get(review_id)
    print('=====================',current_user.get_id() == dead_review.user_id)
    # if (current_user.get_id() == dead_review.user_id)
    db.session.delete(dead_review)
    db.session.commit()
    return { 'dead_review': dead_review.to_dict() }
