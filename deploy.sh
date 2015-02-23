SHA1=$1

DOCKERRUN_FILE=Dockerrun.aws.json
EB_BUCKET=codius-deploy

docker login -e "$DOCKER_EMAIL" -u "$DOCKER_USER" -p "$DOCKER_PASS" quay.io
docker tag quay.io/codius/codius.org:$SHA1 quay.io/codius/codius.org:latest
docker push quay.io/codius/codius.org:$SHA1
docker push quay.io/codius/codius.org:latest

sed "s/<TAG>/$SHA1/" < Dockerrun.aws.json.template > $DOCKERRUN_FILE
aws s3 cp $DOCKERRUN_FILE s3://$EB_BUCKET/$DOCKERRUN_FILE
aws elasticbeanstalk create-application-version --region us-east-1 --application-name codius-dot-org --version-label $SHA1 --source-bundle S3Bucket=$EB_BUCKET,S3Key=$DOCKERRUN_FILE
aws elasticbeanstalk update-environment --region us-east-1 --environment-name staging --version-label $SHA1
