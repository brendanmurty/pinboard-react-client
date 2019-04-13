var pinboard = require('node-pinboard'),
    pinboard_api = new pinboard(process.env.REACT_APP_PINBOARD_API_TOKEN);

exports.get = function (request, response) {
    pinboard_api.get({tag: 'toread'}, function(api_error, api_response) {
        if (!api_error) {
            response.writeHead(200, { 'Content-Type': 'application/json' });
            response.write(api_response);
            response.end();
        }
    });
};
