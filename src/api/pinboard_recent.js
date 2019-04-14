// API: /api/pinboard_recent

var node_pinboard = require('node-pinboard'),
    pinboard_api = new node_pinboard(process.env.PINBOARD_API_TOKEN),
    hashids = require('hashids'),
    hash_ids = new hashids();

exports.get = function (request, response) {
    pinboard_api.recent({}, function(api_error, api_response) {
        if (!api_error && api_response != []) {
            var recent_bookmarks = api_response.posts;
            recent_bookmarks.forEach(function(bookmark) {
                bookmark.hashid = hash_ids.encode(bookmark.href);
            });

            response.end(JSON.stringify(recent_bookmarks));
        }
    });
};
