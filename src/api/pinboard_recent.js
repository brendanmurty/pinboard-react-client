// API: /api/pinboard_recent

var node_pinboard = require('node-pinboard'),
    pinboard_api = new node_pinboard(process.env.PINBOARD_API_TOKEN);

exports.get = function (request, response) {
    pinboard_api.recent({}, function(api_error, api_response) {
        if (!api_error && api_response != []) {
            response.end(JSON.stringify(api_response.posts));
        }
    });
};
