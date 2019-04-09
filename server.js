// Initialise app
var express = require('express'),
    app = express(),
    app_domain = process.env.APP_DOMAIN || 'localhost',
    app_port = process.env.APP_PORT || 80;

// Send all requests to React
app.get('*', function (request, response) {
    response.sendFile('build/index.html', { 'root': __dirname });
});

// Start the server
app.listen(app_port, app_domain);
console.log('http server started at http://' + app_domain + ':' + app_port);
