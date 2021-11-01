from app.models import db, Review


# Adds a demo user, you can add other users here if you want
def seed_reviews():
    review1 = Review(
        item_id = 1,
        user_id = 1,
        # user_firstName = ''
        rating = 5,
        title = 'Great board!',
        content = 'I rode this thing all last year. Highly recommend'
    )
    review2 = Review(
        item_id = 1,
        user_id = 2, 
        # user_firstName = ''
        rating = 3,
        title = 'Pretty good',
        content = 'Not my daily driver, but handles the powder well'
    )
    review2_1 = Review(
        item_id = 1,
        user_id = 4, 
        # user_firstName = ''
        rating = 2,
        title = 'Pretty good',
        content = 'Not my daily driver, but handles the powder well'
    )
    review3 = Review(
        item_id = 2,
        user_id = 3,
        # user_firstName = ''
        rating = 3,
        title = 'I like it',
        content = 'I like the shape, dislike the graphic'
    )
    review4 = Review(
        item_id = 3,
        user_id = 4, 
        # user_firstName = ''
        rating = 3,
        title = 'Bad board',
        content = 'Ended up selling on ebay because it was slow'
    )
    review5 = Review(
        item_id = 4,
        user_id = 5,
        # user_firstName = ''
        rating = 5,
        title = 'Nice Pow Board',
        content = 'Great for tree riding'
    )

    review6 = Review(
        item_id = 5,
        user_id = 2, 
        # user_firstName = ''
        rating = 3,
        title = 'Good addition. Pricey though',
        content = 'I like it, but will probably get something differnt next time'
    )
    review7 = Review(
        item_id = 6,
        user_id = 3,
        # user_firstName = ''
        rating = 5,
        title = 'Fantastic!',
        content = 'Best christmas present ever!'
    )
    review8 = Review(
        item_id = 7,
        user_id = 4, 
        # user_firstName = ''
        rating = 4,
        title = 'Almost perfect',
        content = 'A little bit of chatter at speed, but a fantastic all around board'
    )
    review9 = Review(
        item_id = 15,
        user_id = 5,
        # user_firstName = ''
        rating = 5,
        title = 'Nice and light',
        content = 'Great for lots of situations'
    )
    review10 = Review(
        item_id = 16,
        user_id = 6, 
        # user_firstName = ''
        rating = 3,
        title = 'Toasty',
        content = 'Looks great, feels great'
    )
    review11 = Review(
        item_id = 17,
        user_id = 7,
        # user_firstName = ''
        rating = 5,
        title = 'Wear it everyday!',
        content = 'Highly recommend!'
    )

    db.session.add(review1)
    db.session.add(review2)
    db.session.add(review2_1)
    db.session.add(review3)
    db.session.add(review4)
    db.session.add(review5)
    db.session.add(review6)
    db.session.add(review7)
    db.session.add(review8)
    db.session.add(review9)
    db.session.add(review10)
    db.session.commit()

def undo_reviews():
    db.session.execute('TRUNCATE reviews RESTART IDENTITY CASCADE;')
    db.session.commit()