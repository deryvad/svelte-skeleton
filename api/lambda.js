'use strict';
let app = require('./app');

const serverlessExpress = require('aws-serverless-express');
const server = serverlessExpress.createServer(app);
module.exports.handler = (event, context) => serverlessExpress.proxy(server, event, context)