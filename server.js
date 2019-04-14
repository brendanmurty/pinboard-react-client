// Initialise app
var express = require('express'),
    cors = require('cors'),// TODO: Is this package still required?
    router = express.Router(),
    app = express();

// Set the application domain and port for the server to listen on
const app_domain = process.env.PINBOARD_APP_DOMAIN || 'localhost';
const app_port = process.env.PINBOARD_APP_PORT || 80;

// Load back-end API controllers
var pinboard_recent = require('./src/api/pinboard_recent.js'),
    pinboard_unread = require('./src/api/pinboard_unread.js');

// Configure back-end API routes
router.get('/api/pinboard_recent', pinboard_recent.get);
router.get('/api/pinboard_unread', pinboard_unread.get);

// Allow static content requests
app.use('/', router);
app.use(express.static(__dirname + '/build'));

// Send all other requests to React
app.options('*', cors({ origin: app_domain }));
app.get('*', cors({ origin: app_domain }), function (request, response) {
    response.sendFile('index.html', { 'root': __dirname + '/build' });
});

// Start the web server and listen for requests on the specified domain and port
app.listen(app_port, app_domain);
console.log('http server started at http://' + app_domain + ':' + app_port);
