// API: /api/recent - Returns a JSON string of the user's most recent posts

var node_pinboard = require('node-pinboard').default,
  pinboard_api = new node_pinboard(process.env.PINBOARD_API_TOKEN);

exports.get = function (request, response) {
  pinboard_api.recent({}, function(api_error, api_response) {
    if (!api_error && api_response !== []) {
      var recent_bookmarks = api_response.posts;

      response.end(JSON.stringify(recent_bookmarks));
    }
  });
};
