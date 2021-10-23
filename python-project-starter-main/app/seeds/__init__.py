from flask.cli import AppGroup
from .users import seed_users, undo_users
from .items import seed_items, undo_items
from .reviews import seed_reviews, undo_reviews
# from .carts import seed_carts, undo_carts
from .item_types import seed_itemtypes, undo_itemtypes

# Creates a seed group to hold our commands
# So we can type `flask seed --help`
seed_commands = AppGroup('seed')


# Creates the `flask seed all` command
@seed_commands.command('all')
def seed():
    seed_users()
    seed_itemtypes()
    seed_items()
    seed_reviews()
    # seed_carts()
    # Add other seed functions here


# Creates the `flask seed undo` command
@seed_commands.command('undo')
def undo():
    undo_reviews()
    undo_users()
    undo_itemtypes()
    undo_items()
    # undo_carts()
    # Add other undo functions here
