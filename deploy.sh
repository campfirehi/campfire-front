#!/bin/bash
SERVER=https://campfirehi.github.io/campfire-front/

mkdir -p dist
if ng build --prod --base-href "$SERVER"; then
    echo "Build successfully. Now deploying..."
    ngh
fi
