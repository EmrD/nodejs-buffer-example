# Node + Express Service Starter

This is a simple API sample in Node.js with express.js based on [Google Cloud Run Quickstart](https://cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-nodejs-service).

## Getting Started

Server should run automatically when starting a workspace. To run manually, run:
```sh
node index.js
```

To test:
```
curl -X POST http://localhost:3000/buffer \
-H "Content-Type: application/json" \
-d '{"topic": "Your Topic Here"}'
```

If your topic's length is more than five, you must get this: 
```
Buffer cleared, 5 topics have been processed. You may post to your server in this position.
```
