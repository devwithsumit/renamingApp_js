#!/bin/bash
echo "Script is running..."
# Get the full path of the directory where the script is located
script_full_path=$(dirname "$0")
echo "Script directory: $script_full_path"
echo "Running: node $script_full_path/index.js"
node "$script_full_path/index.js"
