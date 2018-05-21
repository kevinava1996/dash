// Example express application adding the parse-dashboard module to expose Parse Dashboard compatible API routes.

var express = require('express');
var ParseDashboard = require('parse-dashboard');
var path = require('path');

var dashboard = new ParseDashboard({
  //let localParseServer = 'https://pushnotif.scalingo.io';

  // Heroku requires HTTPS. Please read the README file for details.
  // let herokuParseServer = 'https://my-parse-dashboard.herokuapp.com/parse'

  apps: [
    {
      appId: process.env.APP_ID || 'A1P2P3I4D5',
      masterKey: process.env.MASTER_KEY || 'M1A2S3T4E5R6K7E8Y9',
      serverURL: process.env.SERVER_URL || 'https://pushnotif.scalingo.io',
      appName: process.env.APP_NAME || 'MyApp',
    },
  ],
  users: [
    {
      user: 'usuario',
      pass: '12345'
    }
    ]
});

var app = express();
app.enable('trust proxy');

// make the Parse Dashboard available at /
app.use('/', dashboard);

var port = process.env.PORT || 4040;
var httpServer = require('http').createServer(app);
httpServer.listen(port, function() {
  console.log('parse-dashboard-example running on port ' + port + '.');
});
