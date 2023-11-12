#!/bin/bash

node scripts/packModules.cjs 
aws s3 cp node_modules.zip s3://serverless-template-services
cd src/layers/servicesNodeModules
serverless deploy