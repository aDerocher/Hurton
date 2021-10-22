"""empty message

Revision ID: 078d64111915
Revises: bb467123bfa3
Create Date: 2021-10-22 13:54:38.447096

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '078d64111915'
down_revision = 'bb467123bfa3'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('cart_items', sa.Column('is_history', sa.Boolean(), nullable=True))
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_column('cart_items', 'is_history')
    # ### end Alembic commands ###
