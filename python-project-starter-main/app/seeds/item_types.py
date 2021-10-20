from app.models import db, ItemType


def seed_itemtypes():
    snowboard = ItemType(
        item_type = 'snowboard'
    )
    jacket = ItemType(
        item_type = 'jacket'
    )
    boots = ItemType(
        item_type = 'boots'
    )
    bindings = ItemType(
        item_type = 'bindings'
    )

    db.session.add(snowboard)
    db.session.add(jacket)
    db.session.add(boots)
    db.session.add(bindings)
    db.session.commit()

def undo_itemtypes():
    db.session.execute('TRUNCATE item_types RESTART IDENTITY CASCADE;')
    db.session.commit()
