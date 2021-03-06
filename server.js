// Initialise app
var express = require('express'),
    router = express.Router(),
    app = express();

// Set the application domain and port for the server to listen on
const app_domain = process.env.PINBOARD_APP_DOMAIN || 'localhost';
const app_port = process.env.PINBOARD_APP_PORT || 80;

// Show a browser-level user prompt for basic authentication
const basic_auth = require('express-basic-auth')
const user_pass = process.env.PINBOARD_AUTH_PASS;
app.use(basic_auth({
    users: { 'pinboard': user_pass },
    challenge: true
}))

// Load back-end API controllers
var api_recent = require('./src/api/recent.js'),
    api_unread = require('./src/api/unread.js');

// Configure back-end API routes
router.get('/api/recent', api_recent.get);
router.get('/api/unread', api_unread.get);

// Allow static content requests
app.use('/', router);
app.use(express.static(__dirname + '/build'));

// Send all other requests to React
app.get('*', function (request, response) {
    response.sendFile('index.html', { 'root': __dirname + '/build' });
});

// Start the web server and listen for requests on the specified domain and port
app.listen(app_port, app_domain);
console.log('http server started at http://' + app_domain + ':' + app_port);
