#!/bin/bash
set -e
echo "Building static HTML site..."
sudo dnf install -y nodejs22
npm install
npm run build
echo "Build complete. Output in /build"
