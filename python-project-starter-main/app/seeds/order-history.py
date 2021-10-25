from app.models import db, CartItem


def seed_order_hist():
    order1 = CartItem(
        user_id = 1,
        item_id = 1,
        item_name = 'Crying V'
        item_color = 'aqua'
        item_gender = 'Men'
        item_size = '155',
        item_price = 550,
        item_image = 'https://hurton.s3.us-west-2.amazonaws.com/Hurton-downloadedImages/sb1_1.jpg',
        quantity = 1,
        is_history = True
    )

    db.session.add(order1)
    db.session.commit()

def undo_items():
    db.session.execute('TRUNCATE items RESTART IDENTITY CASCADE;')
    db.session.commit()
