// API: /api/recent - Returns a JSON string of the user's most recent posts

var node_pinboard = require('node-pinboard').default,
    pinboard_api = new node_pinboard(process.env.PINBOARD_API_TOKEN),
    hashids = require('hashids'),
    hash_ids = new hashids();

exports.get = function (request, response) {
    pinboard_api.recent({}, function(api_error, api_response) {
        if (!api_error && api_response != []) {
            var recent_bookmarks = api_response.posts;

            // Add a HashID to each bookmark item so it can be used for the "Edit" link in the bookmark list
            recent_bookmarks.forEach(function(bookmark) {
                bookmark.hashid = hash_ids.encode(bookmark.href);
            });

            response.end(JSON.stringify(recent_bookmarks));
        }
    });
};
