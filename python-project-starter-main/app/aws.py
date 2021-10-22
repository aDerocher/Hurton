import boto3
import botocore
import os
import uuid

BUCKET_NAME = os.environ.get("S3_BUCKET")
S3_LOCATION = f"http://{BUCKET_NAME}.s3.amazonaws.com/"
ALLOWED_EXTENSIONS = {"png", "jpg", "jpeg", "gif"}

s3 = boto3.client(
   "s3",
   aws_access_key_id=os.environ.get("S3_KEY"),
   aws_secret_access_key=os.environ.get("S3_SECRET")
)

