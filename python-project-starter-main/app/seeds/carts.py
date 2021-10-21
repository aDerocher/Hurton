from app.models import db, Cart


# Adds a demo user, you can add other users here if you want
def seed_carts():
    cart1 = Cart(
        owner_id = 1, 
    )
    cart2 = Cart(
        owner_id = 2, 
    )
    cart3 = Cart(
        owner_id = 3, 
    )
    cart4 = Cart(
        owner_id = 4, 
    )
    cart5 = Cart(
        owner_id = 5,
    ) 
    cart6 = Cart(
        owner_id = 6,
    ) 
    cart7 = Cart(
        owner_id = 7, 
    )

    db.session.add(cart1)
    db.session.add(cart2)
    db.session.add(cart3)
    db.session.add(cart4)
    db.session.add(cart5)
    db.session.add(cart6)
    db.session.add(cart7)

    db.session.commit()


def undo_carts():
    db.session.execute('TRUNCATE carts RESTART IDENTITY CASCADE;')
    db.session.commit()
