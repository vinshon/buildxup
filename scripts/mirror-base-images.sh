#!/bin/bash
set -e

AWS_REGION="us-east-1"
AWS_ACCOUNT_ID="530061243896"

# Login to ECR
aws ecr get-login-password --region $AWS_REGION | docker login --username AWS --password-stdin $AWS_ACCOUNT_ID.dkr.ecr.$AWS_REGION.amazonaws.com

# Create repos if not exists
aws ecr describe-repositories --repository-names node-alpine >/dev/null 2>&1 || \
  aws ecr create-repository --repository-name node-alpine

aws ecr describe-repositories --repository-names nginx-alpine >/dev/null 2>&1 || \
  aws ecr create-repository --repository-name nginx-alpine

# Pull from Docker Hub
docker pull node:22-alpine
docker pull nginx:alpine

# Tag for ECR
docker tag node:22-alpine $AWS_ACCOUNT_ID.dkr.ecr.$AWS_REGION.amazonaws.com/node-alpine:22
docker tag nginx:alpine $AWS_ACCOUNT_ID.dkr.ecr.$AWS_REGION.amazonaws.com/nginx-alpine:latest

# Push to ECR
docker push $AWS_ACCOUNT_ID.dkr.ecr.$AWS_REGION.amazonaws.com/node-alpine:22
docker push $AWS_ACCOUNT_ID.dkr.ecr.$AWS_REGION.amazonaws.com/nginx-alpine:latest

echo "✅ Mirroring completed. Use the following in your Dockerfile:"
echo "FROM $AWS_ACCOUNT_ID.dkr.ecr.$AWS_REGION.amazonaws.com/node-alpine:22 AS builder"
echo "FROM $AWS_ACCOUNT_ID.dkr.ecr.$AWS_REGION.amazonaws.com/nginx-alpine:latest"
