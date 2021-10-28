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
        name = 'Tweaked',
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
        size = '134',
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
        size = '140',
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
        name = 'Snake Bite',
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

    snowboard10 = Item(
        size = '148',
        name = 'Snake Bite',
        price = 480,
        color = 'mediumpurple',
        gender = 'Men',
        item_type = 1,
        image1 = 'https://hurton.s3.us-west-2.amazonaws.com/Hurton-downloadedImages/sb10-1.jpg',
        image2 = 'https://hurton.s3.us-west-2.amazonaws.com/Hurton-downloadedImages/sb10-2.jpg',
        image3 = 'https://hurton.s3.us-west-2.amazonaws.com/Hurton-downloadedImages/sb10-3.jpg',

        terrain = 8,
        personality = 5,
    )
    snowboard11 = Item(
        size = '149',
        name = 'Shiver',
        price = 550,
        color = 'white',
        gender = 'Men',
        item_type = 1,
        image1 = 'https://hurton.s3.us-west-2.amazonaws.com/Hurton-downloadedImages/sb11-1.jpg',
        image2 = 'https://hurton.s3.us-west-2.amazonaws.com/Hurton-downloadedImages/sb11-2.jpg',
        image3 = 'https://hurton.s3.us-west-2.amazonaws.com/Hurton-downloadedImages/sb11-3.jpg',

        terrain = 9,
        personality = 6,
    )
    snowboard12 = Item(
        size = '150',
        name = 'Popper',
        price = 300,
        color = 'black',
        gender = 'Men',
        item_type = 1,
        image1 = 'https://hurton.s3.us-west-2.amazonaws.com/Hurton-downloadedImages/sb12-1.jpg',
        image2 = 'https://hurton.s3.us-west-2.amazonaws.com/Hurton-downloadedImages/sb12-2.jpg',
        image3 = 'https://hurton.s3.us-west-2.amazonaws.com/Hurton-downloadedImages/sb12-3.jpg',

        terrain = 5,
        personality = 3,
    )
    snowboard13 = Item(
        size = '144',
        name = 'Chafe',
        price = 350,
        color = 'red',
        gender = 'Men',
        item_type = 1,
        image1 = 'https://hurton.s3.us-west-2.amazonaws.com/Hurton-downloadedImages/sb13-1.jpg',
        image2 = 'https://hurton.s3.us-west-2.amazonaws.com/Hurton-downloadedImages/sb13-2.jpg',
        image3 = 'https://hurton.s3.us-west-2.amazonaws.com/Hurton-downloadedImages/sb13-3.jpg',

        terrain = 3,
        personality = 7,
    )
    snowboard14 = Item(
        size = '146',
        name = 'Impact',
        price = 420,
        color = 'salmon',
        gender = 'Men',
        item_type = 1,
        image1 = 'https://hurton.s3.us-west-2.amazonaws.com/Hurton-downloadedImages/sb14-1.jpg',
        image2 = 'https://hurton.s3.us-west-2.amazonaws.com/Hurton-downloadedImages/sb14-2.jpg',
        image3 = 'https://hurton.s3.us-west-2.amazonaws.com/Hurton-downloadedImages/sb14-3.jpg',

        terrain = 10,
        personality = 6,
    )
    snowboard15 = Item(
        size = '145',
        name = 'G-Forces',
        price = 520,
        color = 'moccasin',
        gender = 'Men',
        item_type = 1,
        image1 = 'https://hurton.s3.us-west-2.amazonaws.com/Hurton-downloadedImages/sb15-1.jpg',
        image2 = 'https://hurton.s3.us-west-2.amazonaws.com/Hurton-downloadedImages/sb15-2.jpg',
        image3 = 'https://hurton.s3.us-west-2.amazonaws.com/Hurton-downloadedImages/sb15-3.jpg',

        terrain = 5,
        personality = 2,
    )
    snowboard16 = Item(
        size = '135',
        name = 'Sticker',
        price = 480,
        color = 'moccasin',
        gender = 'Women',
        item_type = 1,
        image1 = 'https://hurton.s3.us-west-2.amazonaws.com/Hurton-downloadedImages/wsb16-1.jpg',
        image2 = 'https://hurton.s3.us-west-2.amazonaws.com/Hurton-downloadedImages/wsb16-2.jpg',
        image3 = 'https://hurton.s3.us-west-2.amazonaws.com/Hurton-downloadedImages/wsb16-3.jpg',

        terrain = 4,
        personality = 8,
    )
    snowboard17 = Item(
        size = '138',
        name = 'Smear',
        price = 460,
        color = 'palegoldenrod',
        gender = 'Women',
        item_type = 1,
        image1 = 'https://hurton.s3.us-west-2.amazonaws.com/Hurton-downloadedImages/wsb17-1.jpg',
        image2 = 'https://hurton.s3.us-west-2.amazonaws.com/Hurton-downloadedImages/wsb17-2.jpg',
        image3 = 'https://hurton.s3.us-west-2.amazonaws.com/Hurton-downloadedImages/wsb17-3.jpg',

        terrain = 9,
        personality = 3,
    )
    snowboard18 = Item(
        size = '120',
        name = 'Tripper',
        price = 220,
        color = 'mediumturquoise',
        color2 = 'mediumvioletred',
        gender = 'Kids',
        item_type = 1,
        image1 = 'https://hurton.s3.us-west-2.amazonaws.com/Hurton-downloadedImages/wsb18-1.jpg',
        image2 = 'https://hurton.s3.us-west-2.amazonaws.com/Hurton-downloadedImages/wsb18-2.jpg',

        terrain = 5,
        personality = 5,
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
        name = 'So Itchy',
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
        name = 'Slimer',
        price = 510,
        color = 'olive',
        color2 = 'dimgrey',
        color3 = 'blanchedalmond',
        gender = 'Men',
        item_type = 2,
        image1 = 'https://hurton.s3.us-west-2.amazonaws.com/Hurton-downloadedImages/jack10-1.jpg',
        image2 = 'https://hurton.s3.us-west-2.amazonaws.com/Hurton-downloadedImages/jack10-2.jpg',
        image3 = 'https://hurton.s3.us-west-2.amazonaws.com/Hurton-downloadedImages/jack10-3.jpg',

        warmth = 6,
        waterproofing = 7,
    )
    jacket8 = Item(
        size = 'M',
        name = 'Abrasion',
        price = 280,
        color = 'lightgrey',
        color2 = 'forestgreen',
        color3 = 'darkgrey',
        gender = 'Men',
        item_type = 2,
        image1 = 'https://hurton.s3.us-west-2.amazonaws.com/Hurton-downloadedImages/jack11-1.jpg',
        image2 = 'https://hurton.s3.us-west-2.amazonaws.com/Hurton-downloadedImages/jack11-2.jpg',
        image3 = 'https://hurton.s3.us-west-2.amazonaws.com/Hurton-downloadedImages/jack11-3.jpg',

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
        item_type = 3,
        image1 = 'https://hurton.s3.us-west-2.amazonaws.com/Hurton-downloadedImages/boot1_1.jpg',
        image2 = 'https://hurton.s3.us-west-2.amazonaws.com/Hurton-downloadedImages/boot1_2.jpg',
        image3 = 'https://hurton.s3.us-west-2.amazonaws.com/Hurton-downloadedImages/boot1_3.jpg',

        lacing = 'quick-lace',
    )
    boots2 = Item(
        size = 'M',
        name = 'Bruiser',
        price = 210,
        color = 'tan',
        color2 = 'black',
        gender = 'Men',
        item_type = 3,
        image1 = 'https://hurton.s3.us-west-2.amazonaws.com/Hurton-downloadedImages/boot10-1.jpg',
        image2 = 'https://hurton.s3.us-west-2.amazonaws.com/Hurton-downloadedImages/boot10-2.jpg',

        lacing = 'boa',
    )
    boots3 = Item(
        size = 'M',
        name = 'Scraper',
        price = 255,
        color = 'black',
        color2 = 'lightgrey',
        color3 = 'whitesmoke',
        gender = 'Women',
        item_type = 3,
        image1 = 'https://hurton.s3.us-west-2.amazonaws.com/Hurton-downloadedImages/boot11-1.jpg',
        image2 = 'https://hurton.s3.us-west-2.amazonaws.com/Hurton-downloadedImages/boot11-2.jpg',
        image3 = 'https://hurton.s3.us-west-2.amazonaws.com/Hurton-downloadedImages/boot11-3.jpg',

        lacing = 'boa',
    )
    boots4 = Item(
        size = 'M',
        name = 'Toe Jam',
        price = 275,
        color = 'black',
        color2 = 'darkblue',
        gender = 'Men',
        item_type = 3,
        image1 = 'https://hurton.s3.us-west-2.amazonaws.com/Hurton-downloadedImages/boot12-1.jpg',
        image2 = 'https://hurton.s3.us-west-2.amazonaws.com/Hurton-downloadedImages/boot12-2.jpg',

        lacing = 'boa',
    )
    boots5 = Item(
        size = 'M',
        name = 'Big Slam',
        price = 275,
        color = 'grey',
        color2 = 'black',
        gender = 'Men',
        item_type = 3,
        image1 = 'https://hurton.s3.us-west-2.amazonaws.com/Hurton-downloadedImages/boot13-1.jpg',
        image2 = 'https://hurton.s3.us-west-2.amazonaws.com/Hurton-downloadedImages/boot13-2.jpg',

        lacing = 'quick-lace',
    )

    #  ============================================== Bindings ===============
    bindings1 = Item(
        size = 'M',
        name = 'Calf Sprain',
        price = 320,
        color = 'grey',
        color2 = 'orange',
        color3 = 'purple',
        gender = 'Women',
        item_type = 4,
        image1 = 'https://hurton.s3.us-west-2.amazonaws.com/Hurton-downloadedImages/binding1_1.jpg',
        image2 = 'https://hurton.s3.us-west-2.amazonaws.com/Hurton-downloadedImages/binding1_2.jpg',
        image3 = 'https://hurton.s3.us-west-2.amazonaws.com/Hurton-downloadedImages/binding1_3.jpg',

        response = 7,
        stiffness = 7,
    )
    bindings2 = Item(
        size = 'M',
        name = 'Crash',
        price = 240,
        color = 'whitesmoke',
        gender = 'Men',
        item_type = 4,
        image1 = 'https://hurton.s3.us-west-2.amazonaws.com/Hurton-downloadedImages/bind10-1.jpg',
        image2 = 'https://hurton.s3.us-west-2.amazonaws.com/Hurton-downloadedImages/bind10-2.jpg',
        image3 = 'https://hurton.s3.us-west-2.amazonaws.com/Hurton-downloadedImages/bind10-3.jpg',

        response = 7,
        stiffness = 5,
    )
    bindings3 = Item(
        size = 'M',
        name = 'Big Slam',
        price = 200,
        color = 'white',
        color2 = 'black',
        gender = 'Men',
        item_type = 2,
        image1 = 'https://hurton.s3.us-west-2.amazonaws.com/Hurton-downloadedImages/bind11-1.jpg',
        image2 = 'https://hurton.s3.us-west-2.amazonaws.com/Hurton-downloadedImages/bind11-2.jpg',
        image3 = 'https://hurton.s3.us-west-2.amazonaws.com/Hurton-downloadedImages/bind11-3.jpg',

        response = 4,
        stiffness = 5,
    )
    bindings4 = Item(
        size = 'M',
        name = 'Crunchy',
        price = 220,
        color = 'midnightblue',
        color2 = 'grey',
        color3 = 'white',
        gender = 'Men',
        item_type = 4,
        image1 = 'https://hurton.s3.us-west-2.amazonaws.com/Hurton-downloadedImages/bind12-1.jpg',
        image2 = 'https://hurton.s3.us-west-2.amazonaws.com/Hurton-downloadedImages/bind12-2.jpg',
        image3 = 'https://hurton.s3.us-west-2.amazonaws.com/Hurton-downloadedImages/bind12-3.jpg',

        response = 6,
        stiffness = 7,
    )
    bindings5 = Item(
        size = 'M',
        name = 'Shot Caller',
        price = 280,
        color = 'black',
        color2 = 'white',
        gender = 'Men',
        item_type = 4,
        image1 = 'https://hurton.s3.us-west-2.amazonaws.com/Hurton-downloadedImages/bind13-1.jpg',
        image2 = 'https://hurton.s3.us-west-2.amazonaws.com/Hurton-downloadedImages/bind13-2.jpg',
        image3 = 'https://hurton.s3.us-west-2.amazonaws.com/Hurton-downloadedImages/bind13-3.jpg',

        response = 8,
        stiffness = 6,
    )
    bindings6 = Item(
        size = 'M',
        name = 'Brawler',
        price = 265,
        color = 'grey',
        color2 = 'plum',
        color3 = 'sandybrown',
        gender = 'Women',
        item_type = 4,
        image1 = 'https://hurton.s3.us-west-2.amazonaws.com/Hurton-downloadedImages/bind14-1.jpg',
        image2 = 'https://hurton.s3.us-west-2.amazonaws.com/Hurton-downloadedImages/bind14-2.jpg',
        image3 = 'https://hurton.s3.us-west-2.amazonaws.com/Hurton-downloadedImages/bind14-3.jpg',

        response = 7,
        stiffness = 5,
    )
    bindings7 = Item(
        size = 'M',
        name = 'Rumble',
        price = 240,
        color = 'black',
        color2 = 'white',
        color3 = 'salmon',
        gender = 'Women',
        item_type = 4,
        image1 = 'https://hurton.s3.us-west-2.amazonaws.com/Hurton-downloadedImages/bind15-1.jpg',
        image2 = 'https://hurton.s3.us-west-2.amazonaws.com/Hurton-downloadedImages/bind15-2.jpg',
        image3 = 'https://hurton.s3.us-west-2.amazonaws.com/Hurton-downloadedImages/bind15-3.jpg',

        response = 5,
        stiffness = 6,
    )
    bindings8 = Item(
        size = 'M',
        name = 'Switch Hitter',
        price = 270,
        color = 'black',
        color2 = 'white',
        color3 = 'salmon',
        gender = 'Men',
        item_type = 4,
        image1 = 'https://hurton.s3.us-west-2.amazonaws.com/Hurton-downloadedImages/bind16-1.jpg',
        image2 = 'https://hurton.s3.us-west-2.amazonaws.com/Hurton-downloadedImages/bind16-2.jpg',
        image3 = 'https://hurton.s3.us-west-2.amazonaws.com/Hurton-downloadedImages/bind16-3.jpg',

        response = 6,
        stiffness = 8,
    )


    db.session.add(snowboard1)
    db.session.add(snowboard2)
    db.session.add(snowboard3)
    db.session.add(snowboard4)
    db.session.add(snowboard5)
    db.session.add(snowboard6)
    db.session.add(snowboard10)
    db.session.add(snowboard11)
    db.session.add(snowboard12)
    db.session.add(snowboard13)
    db.session.add(snowboard14)
    db.session.add(snowboard15)
    db.session.add(snowboard16)
    db.session.add(snowboard17)
    db.session.add(snowboard18)
    
    db.session.add(jacket1)
    db.session.add(jacket2)
    db.session.add(jacket3)
    db.session.add(jacket4)
    db.session.add(jacket5)
    db.session.add(jacket6)
    db.session.add(jacket7)
    db.session.add(jacket8)

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
