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
        size = 'M',
        name = 'Frostbite',
        price = 225,
        color = 'green',
        color2 = 'blue',
        color3 = 'orange',
        gender = 'Men',
        item_type = 2,
        image1 = 'https://hurton.s3.us-west-2.amazonaws.com/Hurton-downloadedImages/jack1_1.jpg',
        image2 = 'https://hurton.s3.us-west-2.amazonaws.com/Hurton-downloadedImages/jack1_2.jpg',
        image3 = 'https://hurton.s3.us-west-2.amazonaws.com/Hurton-downloadedImages/jack1_3.jpg',

        warmth = 3,
        waterproofing = 4,
    )
    jacket2 = Item(
        size = 'M',
        name = 'Blister',
        price = 300,
        color = 'black',
        color2 = 'lightblue',
        color3 = 'orange',
        gender = 'Men',
        item_type = 2,
        image1 = 'https://hurton.s3.us-west-2.amazonaws.com/Hurton-downloadedImages/jack2_1.jpg',
        image2 = 'https://hurton.s3.us-west-2.amazonaws.com/Hurton-downloadedImages/jack2_2.jpg',
        image3 = 'https://hurton.s3.us-west-2.amazonaws.com/Hurton-downloadedImages/jack2_3.jpg',

        warmth = 5,
        waterproofing = 8,
    )
    jacket3 = Item(
        size = 'M',
        name = 'Papercut',
        price = 400,
        color = 'grey',
        color2 = 'olive',
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
        size = 'M',
        name = 'Rugburn',
        price = 120,
        color = 'darkblue',
        color2 = 'maroon',
        color3 = 'darkmagenta',
        gender = 'Women',
        item_type = 2,
        image1 = 'https://hurton.s3.us-west-2.amazonaws.com/Hurton-downloadedImages/jack4_1.jpg',
        image2 = 'https://hurton.s3.us-west-2.amazonaws.com/Hurton-downloadedImages/jack4_2.jpg',
        image3 = 'https://hurton.s3.us-west-2.amazonaws.com/Hurton-downloadedImages/jack4_3.jpg',

        warmth = 3,
        waterproofing = 2,
    )
    jacket5 = Item(
        size = 'M',
        name = 'Bad Itch',
        price = 320,
        color = 'pink',
        color2 = 'black',
        color3 = 'tomato',
        gender = 'Women',
        item_type = 2,
        image1 = 'https://hurton.s3.us-west-2.amazonaws.com/Hurton-downloadedImages/jack5_1.jpg',
        image2 = 'https://hurton.s3.us-west-2.amazonaws.com/Hurton-downloadedImages/jack5_2.jpg',
        image3 = 'https://hurton.s3.us-west-2.amazonaws.com/Hurton-downloadedImages/jack5_3.jpg',

        warmth = 2,
        waterproofing = 9,
    )
    jacket6 = Item(
        size = 'M',
        name = 'Black Eye',
        price = 360,
        color = 'darkslategrey',
        gender = 'Women',
        item_type = 2,
        image1 = 'https://hurton.s3.us-west-2.amazonaws.com/Hurton-downloadedImages/jack6_1.jpg',
        image2 = 'https://hurton.s3.us-west-2.amazonaws.com/Hurton-downloadedImages/jack6_2.jpg',
        image3 = 'https://hurton.s3.us-west-2.amazonaws.com/Hurton-downloadedImages/jack6_3.jpg',

        warmth = 6,
        waterproofing = 7,
    )
    jacket7 = Item(
        size = 'M',
        name = 'Black Eye',
        price = 360,
        color = 'darkslategrey',
        gender = 'Women',
        item_type = 2,
        image1 = 'https://hurton.s3.us-west-2.amazonaws.com/Hurton-downloadedImages/jack10_1.jpg',
        image2 = 'https://hurton.s3.us-west-2.amazonaws.com/Hurton-downloadedImages/jack10_2.jpg',
        image3 = 'https://hurton.s3.us-west-2.amazonaws.com/Hurton-downloadedImages/jack10_3.jpg',

        warmth = 6,
        waterproofing = 7,
    )
    jacket8 = Item(
        size = 'M',
        name = 'Black Eye',
        price = 360,
        color = 'darkslategrey',
        gender = 'Women',
        item_type = 2,
        image1 = 'https://hurton.s3.us-west-2.amazonaws.com/Hurton-downloadedImages/jack11_1.jpg',
        image2 = 'https://hurton.s3.us-west-2.amazonaws.com/Hurton-downloadedImages/jack11_2.jpg',
        image3 = 'https://hurton.s3.us-west-2.amazonaws.com/Hurton-downloadedImages/jack11_3.jpg',

        warmth = 6,
        waterproofing = 7,
    )
    jacket9 = Item(
        size = 'M',
        name = 'Black Eye',
        price = 360,
        color = 'darkslategrey',
        gender = 'Women',
        item_type = 2,
        image1 = 'https://hurton.s3.us-west-2.amazonaws.com/Hurton-downloadedImages/jack12_1.jpg',

        warmth = 6,
        waterproofing = 7,
    )

    # ========== Boots and Bindings =============
    boots1 = Item(
        size = 'M',
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
    boots2 = Item(
        size = 'M',
        name = 'Broken Toe',
        price = 275,
        color = 'purple',
        color2 = 'black',
        color3 = 'blue',
        gender = 'Women',
        item_type = 2,
        image1 = 'https://hurton.s3.us-west-2.amazonaws.com/Hurton-downloadedImages/boot10_1.jpg',
        image2 = 'https://hurton.s3.us-west-2.amazonaws.com/Hurton-downloadedImages/boot10_2.jpg',

        lacing = 'quick-lace',
    )
    boots3 = Item(
        size = 'M',
        name = 'Broken Toe',
        price = 275,
        color = 'purple',
        color2 = 'black',
        color3 = 'blue',
        gender = 'Women',
        item_type = 2,
        image1 = 'https://hurton.s3.us-west-2.amazonaws.com/Hurton-downloadedImages/boot11_1.jpg',
        image2 = 'https://hurton.s3.us-west-2.amazonaws.com/Hurton-downloadedImages/boot11_2.jpg',
        image3 = 'https://hurton.s3.us-west-2.amazonaws.com/Hurton-downloadedImages/boot11_3.jpg',

        lacing = 'quick-lace',
    )
    boots4 = Item(
        size = 'M',
        name = 'Broken Toe',
        price = 275,
        color = 'purple',
        color2 = 'black',
        color3 = 'blue',
        gender = 'Women',
        item_type = 2,
        image1 = 'https://hurton.s3.us-west-2.amazonaws.com/Hurton-downloadedImages/boot12_1.jpg',
        image2 = 'https://hurton.s3.us-west-2.amazonaws.com/Hurton-downloadedImages/boot12_2.jpg',

        lacing = 'quick-lace',
    )
    boots5 = Item(
        size = 'M',
        name = 'Broken Toe',
        price = 275,
        color = 'purple',
        color2 = 'black',
        color3 = 'blue',
        gender = 'Women',
        item_type = 2,
        image1 = 'https://hurton.s3.us-west-2.amazonaws.com/Hurton-downloadedImages/boot13_1.jpg',
        image2 = 'https://hurton.s3.us-west-2.amazonaws.com/Hurton-downloadedImages/boot13_2.jpg',

        lacing = 'quick-lace',
    )

    bindings1 = Item(
        size = 'M',
        name = 'Calf Sprain',
        price = 275,
        color = 'grey',
        color2 = 'orange',
        color3 = 'purple',
        gender = 'Women',
        item_type = 2,
        image1 = 'https://hurton.s3.us-west-2.amazonaws.com/Hurton-downloadedImages/binding1_1.jpg',
        image2 = 'https://hurton.s3.us-west-2.amazonaws.com/Hurton-downloadedImages/binding1_2.jpg',
        image3 = 'https://hurton.s3.us-west-2.amazonaws.com/Hurton-downloadedImages/binding1_3.jpg',

        response = 7,
        stiffness = 7,
    )
    bindings2 = Item(
        size = 'M',
        name = 'Scratch',
        price = 240,
        color = 'grey',
        color2 = 'orange',
        color3 = 'purple',
        gender = 'Men',
        item_type = 2,
        image1 = 'https://hurton.s3.us-west-2.amazonaws.com/Hurton-downloadedImages/bind10-1.jpg',
        image2 = 'https://hurton.s3.us-west-2.amazonaws.com/Hurton-downloadedImages/bind10_2.jpg',
        image3 = 'https://hurton.s3.us-west-2.amazonaws.com/Hurton-downloadedImages/bind10_3.jpg',

        response = 7,
        stiffness = 7,
    )
    bindings3 = Item(
        size = 'M',
        name = 'Scratch',
        price = 250,
        color = 'grey',
        color2 = 'orange',
        color3 = 'purple',
        gender = 'Men',
        item_type = 2,
        image1 = 'https://hurton.s3.us-west-2.amazonaws.com/Hurton-downloadedImages/bind11-1.jpg',
        image2 = 'https://hurton.s3.us-west-2.amazonaws.com/Hurton-downloadedImages/bind11_2.jpg',
        image3 = 'https://hurton.s3.us-west-2.amazonaws.com/Hurton-downloadedImages/bind11_3.jpg',

        response = 7,
        stiffness = 7,
    )
    bindings4 = Item(
        size = 'M',
        name = 'Scratch',
        price = 220,
        color = 'grey',
        color2 = 'orange',
        color3 = 'purple',
        gender = 'Men',
        item_type = 2,
        image1 = 'https://hurton.s3.us-west-2.amazonaws.com/Hurton-downloadedImages/bind12-1.jpg',
        image2 = 'https://hurton.s3.us-west-2.amazonaws.com/Hurton-downloadedImages/bind12_2.jpg',
        image3 = 'https://hurton.s3.us-west-2.amazonaws.com/Hurton-downloadedImages/bind12_3.jpg',

        response = 7,
        stiffness = 7,
    )
    bindings5 = Item(
        size = 'M',
        name = 'Scratch',
        price = 280,
        color = 'grey',
        color2 = 'orange',
        color3 = 'purple',
        gender = 'Men',
        item_type = 2,
        image1 = 'https://hurton.s3.us-west-2.amazonaws.com/Hurton-downloadedImages/bind13-1.jpg',
        image2 = 'https://hurton.s3.us-west-2.amazonaws.com/Hurton-downloadedImages/bind13_2.jpg',
        image3 = 'https://hurton.s3.us-west-2.amazonaws.com/Hurton-downloadedImages/bind13_3.jpg',

        response = 7,
        stiffness = 7,
    )
    bindings6 = Item(
        size = 'M',
        name = 'Scratch',
        price = 300,
        color = 'grey',
        color2 = 'orange',
        color3 = 'purple',
        gender = 'Men',
        item_type = 2,
        image1 = 'https://hurton.s3.us-west-2.amazonaws.com/Hurton-downloadedImages/bind14-1.jpg',
        image2 = 'https://hurton.s3.us-west-2.amazonaws.com/Hurton-downloadedImages/bind14_2.jpg',
        image3 = 'https://hurton.s3.us-west-2.amazonaws.com/Hurton-downloadedImages/bind14_3.jpg',

        response = 7,
        stiffness = 7,
    )
    bindings7 = Item(
        size = 'M',
        name = 'Scratch',
        price = 300,
        color = 'grey',
        color2 = 'orange',
        color3 = 'purple',
        gender = 'Men',
        item_type = 2,
        image1 = 'https://hurton.s3.us-west-2.amazonaws.com/Hurton-downloadedImages/bind15-1.jpg',
        image2 = 'https://hurton.s3.us-west-2.amazonaws.com/Hurton-downloadedImages/bind15_2.jpg',
        image3 = 'https://hurton.s3.us-west-2.amazonaws.com/Hurton-downloadedImages/bind15_3.jpg',

        response = 7,
        stiffness = 7,
    )
    bindings8 = Item(
        size = 'M',
        name = 'Scratch',
        price = 300,
        color = 'grey',
        color2 = 'orange',
        color3 = 'purple',
        gender = 'Men',
        item_type = 2,
        image1 = 'https://hurton.s3.us-west-2.amazonaws.com/Hurton-downloadedImages/bind16-1.jpg',
        image2 = 'https://hurton.s3.us-west-2.amazonaws.com/Hurton-downloadedImages/bind16_2.jpg',
        image3 = 'https://hurton.s3.us-west-2.amazonaws.com/Hurton-downloadedImages/bind16_3.jpg',

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
    db.session.add(boots2)
    db.session.add(boots3)
    db.session.add(boots4)
    db.session.add(boots5)

    db.session.add(bindings1)
    db.session.add(bindings2)
    db.session.add(bindings3)
    db.session.add(bindings4)
    db.session.add(bindings5)
    db.session.add(bindings6)
    db.session.add(bindings7)
    db.session.add(bindings8)

    db.session.commit()

def undo_items():
    db.session.execute('TRUNCATE items RESTART IDENTITY CASCADE;')
    db.session.commit()
