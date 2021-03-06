"""empty message

Revision ID: a872f0cfacd6
Revises: f7ff3e1dc775
Create Date: 2021-10-25 09:15:07.808107

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'a872f0cfacd6'
down_revision = 'f7ff3e1dc775'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('cart_items', sa.Column('item_gender', sa.String(length=255), nullable=False))
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_column('cart_items', 'item_gender')
    # ### end Alembic commands ###
