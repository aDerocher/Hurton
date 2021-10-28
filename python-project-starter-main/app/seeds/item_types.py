from app.models import db, ItemType


def seed_itemtypes():
    snowboards = ItemType(
        item_type = 'snowboards'
    )
    jackets = ItemType(
        item_type = 'jackets'
    )
    boots = ItemType(
        item_type = 'boots'
    )
    bindings = ItemType(
        item_type = 'bindings'
    )

    db.session.add(snowboards)
    db.session.add(jackets)
    db.session.add(boots)
    db.session.add(bindings)
    db.session.commit()

def undo_itemtypes():
    db.session.execute('TRUNCATE item_types RESTART IDENTITY CASCADE;')
    db.session.commit()
