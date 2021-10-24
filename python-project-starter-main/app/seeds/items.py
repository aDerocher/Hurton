from app.models import db, Item


# spliter, deviated septum, tummy ache, frostbite, chipped tooth, fat lip, full cast, crutch, fracture


def seed_items():
    snowboard1 = Item(
        size = '155',
        name = 'Crying V',
        price = '550',
        color = 'aqua',
        gender = 'Men',
        item_type = 1,
        image1 = 'https://hurton.s3.us-west-2.amazonaws.com/Hurton-downloadedImages/sb1_1.jpg',
        image2 = 'https://hurton.s3.us-west-2.amazonaws.com/Hurton-downloadedImages/sb1_2.jpg',
        image3 = 'https://hurton.s3.us-west-2.amazonaws.com/Hurton-downloadedImages/sb1_3.jpg',

        terrain = 8,
        personality = 7,
    )
    snowboard2 = Item(
        size = '155',
        name = 'Tooth Chip',
        price = '450',
        color = 'green',
        color2 = 'yellow',
        color3 = 'blue',
        gender = 'Men',
        item_type = 1,
        image1 = 'https://hurton.s3.us-west-2.amazonaws.com/Hurton-downloadedImages/sb2_1.jpg',
        image2 = 'https://hurton.s3.us-west-2.amazonaws.com/Hurton-downloadedImages/sb2_2.jpg',
        image3 = 'https://hurton.s3.us-west-2.amazonaws.com/Hurton-downloadedImages/sb2_3.jpg',

        terrain = 7,
        personality = 2,
    )
    snowboard3 = Item(
        size = '155',
        name = 'Neck Breaker',
        price = '1000',
        color = 'black',
        gender = 'Men',
        item_type = 1,
        image1 = 'https://hurton.s3.us-west-2.amazonaws.com/Hurton-downloadedImages/sb3_1.jpg',
        image2 = 'https://hurton.s3.us-west-2.amazonaws.com/Hurton-downloadedImages/sb3_2.jpg',
        image3 = 'https://hurton.s3.us-west-2.amazonaws.com/Hurton-downloadedImages/sb3_3.jpg',

        terrain = 9,
        personality = 5,
    )
    # ======== womens snowboards ===========
    snowboard4 = Item(
        size = '145',
        name = 'Twisted Ankle',
        price = '375',
        color = 'purple',
        gender = 'Women',
        item_type = 1,
        image1 = 'https://hurton.s3.us-west-2.amazonaws.com/Hurton-downloadedImages/sb4_1.jpg',
        image2 = 'https://hurton.s3.us-west-2.amazonaws.com/Hurton-downloadedImages/sb4_2.jpg',
        image3 = 'https://hurton.s3.us-west-2.amazonaws.com/Hurton-downloadedImages/sb4_3.jpg',
        
        terrain = 4,
        personality = 4,
    )
    snowboard5 = Item(
        size = '145',
        name = 'Lip Buster',
        price = 425,
        color = 'pink',
        gender = 'Women',
        item_type = 1,
        image1 = 'https://hurton.s3.us-west-2.amazonaws.com/Hurton-downloadedImages/sb5_1.jpg',
        image2 = 'https://hurton.s3.us-west-2.amazonaws.com/Hurton-downloadedImages/sb5_2.jpg',
        image3 = 'https://hurton.s3.us-west-2.amazonaws.com/Hurton-downloadedImages/sb5_3.jpg',

        terrain = 6,
        personality = 8,
    )
    snowboard6 = Item(
        size = '145',
        name = 'Cracked Patella',
        price = 500,
        color = 'teal',
        gender = 'Men',
        item_type = 1,
        image1 = 'https://hurton.s3.us-west-2.amazonaws.com/Hurton-downloadedImages/sb6_1.jpg',
        image2 = 'https://hurton.s3.us-west-2.amazonaws.com/Hurton-downloadedImages/sb6_2.jpg',
        image3 = 'https://hurton.s3.us-west-2.amazonaws.com/Hurton-downloadedImages/sb6_3.jpg',

        terrain = 9,
        personality = 6,
    )


    # ======== womens snowboards ===========
    jacket1 = Item(
        size = 'Men',
        name = 'Frostbite',
        price = 225,
        color = 'green',
        gender = 'Men',
        item_type = 2,
        image1 = 'https://hurton.s3.us-west-2.amazonaws.com/Hurton-downloadedImages/jack1_1.jpg',
        image2 = 'https://hurton.s3.us-west-2.amazonaws.com/Hurton-downloadedImages/jack1_2.jpg',
        image3 = 'https://hurton.s3.us-west-2.amazonaws.com/Hurton-downloadedImages/jack1_3.jpg',

        warmth = 3,
        waterproofing = 4,
    )
    jacket2 = Item(
        size = 'Men',
        name = 'Blister',
        price = 300,
        color = 'black',
        gender = 'Men',
        item_type = 2,
        image1 = 'https://hurton.s3.us-west-2.amazonaws.com/Hurton-downloadedImages/jack2_1.jpg',
        image2 = 'https://hurton.s3.us-west-2.amazonaws.com/Hurton-downloadedImages/jack2_2.jpg',
        image3 = 'https://hurton.s3.us-west-2.amazonaws.com/Hurton-downloadedImages/jack2_3.jpg',

        warmth = 5,
        waterproofing = 8,
    )
    jacket3 = Item(
        size = 'Men',
        name = 'Papercut',
        price = 400,
        color = 'grey',
        gender = 'Men',
        item_type = 2,
        image1 = 'https://hurton.s3.us-west-2.amazonaws.com/Hurton-downloadedImages/jack3_1.jpg',
        image2 = 'https://hurton.s3.us-west-2.amazonaws.com/Hurton-downloadedImages/jack3_2.jpg',
        image3 = 'https://hurton.s3.us-west-2.amazonaws.com/Hurton-downloadedImages/jack3_3.jpg',

        warmth = 3,
        waterproofing = 2,
    )

    # ======== womens jackets ===========
    jacket4 = Item(
        size = 'Men',
        name = 'Rugburn',
        price = 275,
        color = 'darkblue',
        gender = 'Women',
        item_type = 2,
        image1 = 'https://hurton.s3.us-west-2.amazonaws.com/Hurton-downloadedImages/jack4_1.jpg',
        image2 = 'https://hurton.s3.us-west-2.amazonaws.com/Hurton-downloadedImages/jack4_2.jpg',
        image3 = 'https://hurton.s3.us-west-2.amazonaws.com/Hurton-downloadedImages/jack4_3.jpg',

        warmth = 3,
        waterproofing = 2,
    )
    jacket5 = Item(
        size = 'Men',
        name = 'Bad Itch',
        price = 320,
        color = 'pink',
        gender = 'Women',
        item_type = 2,
        image1 = 'https://hurton.s3.us-west-2.amazonaws.com/Hurton-downloadedImages/jack5_1.jpg',
        image2 = 'https://hurton.s3.us-west-2.amazonaws.com/Hurton-downloadedImages/jack5_2.jpg',
        image3 = 'https://hurton.s3.us-west-2.amazonaws.com/Hurton-downloadedImages/jack5_3.jpg',

        warmth = 2,
        waterproofing = 9,
    )
    jacket6 = Item(
        size = 'Men',
        name = 'Black Eye',
        price = 360,
        color = 'teal',
        gender = 'Women',
        item_type = 2,
        image1 = 'https://hurton.s3.us-west-2.amazonaws.com/Hurton-downloadedImages/jack6_1.jpg',
        image2 = 'https://hurton.s3.us-west-2.amazonaws.com/Hurton-downloadedImages/jack6_2.jpg',
        image3 = 'https://hurton.s3.us-west-2.amazonaws.com/Hurton-downloadedImages/jack6_3.jpg',

        warmth = 6,
        waterproofing = 7,
    )

    # ========== Boots and Bindings =============
    boots1 = Item(
        size = 'Men',
        name = 'Broken Toe',
        price = 275,
        color = 'purple',
        color2 = 'black',
        color3 = 'blue',
        gender = 'Women',
        item_type = 2,
        image1 = 'https://hurton.s3.us-west-2.amazonaws.com/Hurton-downloadedImages/boot1_1.jpg',
        image2 = 'https://hurton.s3.us-west-2.amazonaws.com/Hurton-downloadedImages/boot1_2.jpg',
        image3 = 'https://hurton.s3.us-west-2.amazonaws.com/Hurton-downloadedImages/boot1_3.jpg',

        lacing = 'quick-lace',
    )
    bindings1 = Item(
        size = 'Men',
        name = 'Calf Sprain',
        price = 275,
        color = 'black',
        color2 = 'orange',
        color3 = 'grey',
        gender = 'Women',
        item_type = 2,
        image1 = 'https://hurton.s3.us-west-2.amazonaws.com/Hurton-downloadedImages/binding1_1.jpg',
        image2 = 'https://hurton.s3.us-west-2.amazonaws.com/Hurton-downloadedImages/binding1_2.jpg',
        image3 = 'https://hurton.s3.us-west-2.amazonaws.com/Hurton-downloadedImages/binding1_3.jpg',

        response = 7,
        stiffness = 7,
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
