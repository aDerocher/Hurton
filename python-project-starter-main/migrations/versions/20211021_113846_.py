"""empty message

Revision ID: ad20fb467d80
Revises: bfecb208eeae
Create Date: 2021-10-21 11:38:46.563802

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'ad20fb467d80'
down_revision = 'bfecb208eeae'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('cart_items', sa.Column('user_id', sa.Integer(), nullable=False))
    op.drop_constraint('cart_items_cart_id_fkey', 'cart_items', type_='foreignkey')
    op.create_foreign_key(None, 'cart_items', 'carts', ['user_id'], ['id'])
    op.drop_column('cart_items', 'cart_id')
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('cart_items', sa.Column('cart_id', sa.INTEGER(), autoincrement=False, nullable=False))
    op.drop_constraint(None, 'cart_items', type_='foreignkey')
    op.create_foreign_key('cart_items_cart_id_fkey', 'cart_items', 'carts', ['cart_id'], ['id'])
    op.drop_column('cart_items', 'user_id')
    # ### end Alembic commands ###