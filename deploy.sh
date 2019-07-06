#!/bin/bash
SERVER=https://campfirehi.github.io/campfire-front/

ng build --prod --base-href "$SERVER" 
ngh
