// API: /api/unread - Returns a JSON string of the user's unread posts

var node_pinboard = require('node-pinboard').default,
  pinboard_api = new node_pinboard(process.env.PINBOARD_API_TOKEN);

exports.get = function (request, response) {
  pinboard_api.all({}, function(api_error, api_response) {
    if (!api_error) {
      if (api_response === []) {
        // No bookmarks
        response.end('[]');
      } else {
        // At least one bookmark

        // Include only unread bookmarks
        unread_bookmarks = [];

        response.end(JSON.stringify(unread_bookmarks));
      }
    }
  });
};
