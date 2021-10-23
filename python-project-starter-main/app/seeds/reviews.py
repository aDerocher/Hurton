from app.models import db, Review


# Adds a demo user, you can add other users here if you want
def seed_reviews():
    review1 = Review(
        item_id = 1,
        user_id = 1, 
        rating = 5,
        title = 'Great board!',
        content = 'I rode this thing all last year. Highly recommend'
    )
    review2 = Review(
        item_id = 1,
        user_id = 2, 
        rating = 3,
        title = 'Pretty good',
        content = 'Not my daily driver, but handles the powder well'
    )
    review3 = Review(
        item_id = 2,
        user_id = 4, 
        rating = 3,
        title = 'I like it',
        content = 'I like the shape, dislike the graphic'
    )
    review4 = Review(
        item_id = 3,
        user_id = 5, 
        rating = 3,
        title = 'Bad board',
        content = 'Ended up selling on ebay because it was slow'
    )
    db.session.add(review1)
    db.session.add(review2)
    db.session.add(review3)
    db.session.add(review4)
    db.session.commit()

def undo_reviews():
    db.session.execute('TRUNCATE reviews RESTART IDENTITY CASCADE;')
    db.session.commit()