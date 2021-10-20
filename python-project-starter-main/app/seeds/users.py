from app.models import db, User


# Adds a demo user, you can add other users here if you want
def seed_users():
    demo = User(
        firstName ='Demo', 
        lastName = 'Hurton',
        email='demo@hurton.com',
        password='password')
    jake = User(
        firstName ='Jake', 
        lastName = 'Hurton',
        email='jake@hurton.com',
        password='password')
    vince = User(
        firstName ='Vincent', 
        lastName = 'Schuster',
        email='vinny@schust.com',
        password='password')
    dan = User(
        firstName ='Dan', 
        lastName = 'Scott',
        email='danny@scottsimmons.com',
        password='password')
    rick = User(
        firstName ='Rick', 
        lastName = 'Brolin',
        email='rick@brollin.com',
        password='password')
    vasko = User(
        firstName ='Vasko', 
        lastName = 'St.Petersburg',
        email='vasko@vasko.com',
        password='password')
    dragon = User(
        firstName ='Dragon', 
        lastName = 'Long',
        email='dragon@long.com',
        password='password')


    db.session.add(jake)
    db.session.add(vince)
    db.session.add(dan)
    db.session.add(rick)
    db.session.add(vasko)
    db.session.add(dragon)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_users():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
