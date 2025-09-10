#!/bin/bash
 
# Build the project
echo "Building the project..."
npm run build
 
if [ $? -eq 0 ]; then
    echo "Build successful. Starting with PM2..."
    # Stop existing PM2 process if running
    pm2 stop xbolt-landing 2>/dev/null || true
    pm2 delete xbolt-landing 2>/dev/null || true
    # Start with PM2
    pm2 start --name xbolt-landing "npm run start"
    # Save PM2 configuration
    pm2 save
    echo "Server started with PM2!"
    echo "Use 'pm2 status' to check status"
    echo "Use 'pm2 logs xbolt-landing' to view logs"
    echo "Use 'pm2 restart xbolt-landing' to restart"
    echo "Use 'pm2 stop xbolt-landing' to stop"
else
    echo "Build failed. Please check the errors above."
    exit 1
fi