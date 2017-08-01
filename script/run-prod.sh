# Install Dependencies
yarn

# Test React
yarn test

# Build React
yarn react-build

# RUN Server with React in build/ folder. 
# with PM2
pm2 start server.js --name ASK

# RE-CHECK START `ASK` SERVER
pm2 restart ASK

