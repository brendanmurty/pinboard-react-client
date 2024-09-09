// Initialise app
var express = require('express'),
  router = express.Router(),
  app = express();

// Enable all CORS requests if needed
if (process.env.PINBOARD_APP_ALLOW_ALL_CORS_REQUESTS) {
  var cors = require('cors');
  app.use(cors());

  console.log('WARNING: All other domains can access data from this system! To disable this, remove the "PINBOARD_APP_ALLOW_ALL_CORS_REQUESTS" line from ".env"');
}

// Set the application domain and port for the server to listen on
const app_domain = process.env.PINBOARD_APP_DOMAIN || 'localhost';
const app_port = process.env.PINBOARD_APP_PORT || 8888;

// Load back-end API controllers
var api_recent = require('./api/recent.js'),
  api_unread = require('./api/unread.js');

// Configure back-end API routes
router.get('/api/recent', api_recent.get);
router.get('/api/unread', api_unread.get);

// Allow static content requests
app.use('/', router);
app.use(express.static('./build'));

// Send all other requests to React
app.get('*', function (request, response) {
  response.sendFile('index.html', { 'root': './build' });
});

// Start the web server and listen for requests on the specified domain and port
app.listen(app_port, app_domain);
console.log('Server started at http://' + app_domain + ':' + app_port);
