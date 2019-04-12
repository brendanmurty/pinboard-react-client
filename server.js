// Initialise app
var express = require('express'),
    cors = require('cors'),
    app = express();

// Set the application domain and port for the server to listen on
const app_domain = process.env.PINBOARD_APP_DOMAIN || 'localhost';
const app_port = process.env.PINBOARD_APP_PORT || 80;

// Allow external requests to the Pinboard API domain
var corsOptions = {
  origin: 'https://api.pinboard.in',
  optionsSuccessStatus: 200
}

// Allow static content requests
app.use(express.static(__dirname + '/build'));

// Send all other requests to React along with the customised CORS options
app.get('*', cors(corsOptions), function (request, response) {
    response.sendFile('index.html', { 'root': __dirname + '/build' });
});

// Start the server
app.listen(app_port, app_domain);
console.log('http server started at http://' + app_domain + ':' + app_port);
