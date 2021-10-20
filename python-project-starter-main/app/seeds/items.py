from app.models import db, Item


def seed_items():
    snowboard1 = Item(
        size = '155',
        name = 'Crying V',
        price = '550',
        color = 'white',
        gender = 'm',
        item_type = 1,

        terrain = 5,
        personality = 2,
    )
    snowboard2 = Item(
        size = '155',
        name = 'Torn Hamstring',
        price = '450',
        color = 'red',
        gender = 'm',
        item_type = 1,

        terrain = 7,
        personality = 5,
    )
    snowboard3 = Item(
        size = '155',
        name = 'Neck Breaker',
        price = '1000',
        color = 'black',
        gender = 'm',
        item_type = 1,

        terrain = 10,
        personality = 8,
    )
    # ======== womens snowboards ===========
    snowboard4 = Item(
        size = '145',
        name = 'Twisted Ankle',
        price = '375',
        color = 'purple',
        gender = 'w',
        item_type = 1,

        terrain = 4,
        personality = 2,
    )
    snowboard5 = Item(
        size = '145',
        name = 'Lip Buster',
        price = 425,
        color = 'red',
        gender = 'w',
        item_type = 1,

        terrain = 6,
        personality = 4,
    )
    snowboard6 = Item(
        size = '145',
        name = 'Cracked Patella',
        price = 500,
        color = 'grey',
        gender = 'w',
        item_type = 1,

        terrain = 7,
        personality = 5,
    )


    # ======== womens snowboards ===========
    jacket1 = Item(
        size = 'm',
        name = 'Frostbite',
        price = 225,
        color = 'blue',
        gender = 'm',
        item_type = 2,

        warmth = 3,
        waterproofing = 4,
    )
    jacket2 = Item(
        size = 'm',
        name = 'Blister',
        price = 300,
        color = 'orange',
        gender = 'm',
        item_type = 2,

        warmth = 5,
        waterproofing = 8,
    )
    jacket3 = Item(
        size = 'm',
        name = 'Papercut',
        price = 400,
        color = 'grey',
        gender = 'm',
        item_type = 2,

        warmth = 8,
        waterproofing = 10,
    )

    # ======== womens jackets ===========
    jacket4 = Item(
        size = 'm',
        name = 'Rugburn',
        price = 275,
        color = 'purple',
        gender = 'w',
        item_type = 2,

        warmth = 6,
        waterproofing = 6,
    )
    jacket5 = Item(
        size = 'm',
        name = 'Bad Itch',
        price = 320,
        color = 'black',
        gender = 'w',
        item_type = 2,

        warmth = 5,
        waterproofing = 9,
    )
    jacket6 = Item(
        size = 'm',
        name = 'Black Eye',
        price = 360,
        color = 'blue',
        gender = 'w',
        item_type = 2,

        warmth = 5,
        waterproofing = 10,
    )

    # ========== Boots and Bindings =============
    boots1 = Item(
        size = 'm',
        name = 'Broken Toe',
        price = 275,
        color = 'purple',
        gender = 'w',
        item_type = 2,

        lacing = 'boa',
    )
    bindings1 = Item(
        size = 'm',
        name = 'Calf Sprain',
        price = 275,
        color = 'purple',
        gender = 'w',
        item_type = 2,

        response = 10,
        stiffness = 10,
    )


    db.session.add(snowboard1)
    db.session.add(snowboard2)
    db.session.add(snowboard3)
    db.session.add(snowboard4)
    db.session.add(snowboard5)
    db.session.add(snowboard6)
    
    db.session.add(jacket1)
    db.session.add(jacket2)
    db.session.add(jacket3)
    db.session.add(jacket4)
    db.session.add(jacket5)
    db.session.add(jacket6)

    db.session.add(boots1)
    db.session.add(bindings1)

    db.session.commit()

def undo_items():
    db.session.execute('TRUNCATE items RESTART IDENTITY CASCADE;')
    db.session.commit()
