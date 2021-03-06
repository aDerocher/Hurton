"""empty message

Revision ID: 2655b6ab3abe
Revises: 1f53831b351d
Create Date: 2021-10-21 11:44:11.016250

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '2655b6ab3abe'
down_revision = '1f53831b351d'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('cart_items', sa.Column('quantity', sa.Integer(), nullable=True))
    op.drop_column('cart_items', 'item_quantity')
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('cart_items', sa.Column('item_quantity', sa.INTEGER(), autoincrement=False, nullable=True))
    op.drop_column('cart_items', 'quantity')
    # ### end Alembic commands ###
