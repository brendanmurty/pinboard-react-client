// API: /api/unread - Returns a JSON string of the user's unread posts

var node_pinboard = require('node-pinboard'),
    pinboard_api = new node_pinboard(process.env.PINBOARD_API_TOKEN),
    hashids = require('hashids'),
    hash_ids = new hashids();

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
                api_response.forEach (function(bookmark) {
                    if (bookmark.toread == 'yes') {
                        // Add a HashID to each bookmark item so it can be used for the "Edit" link in the bookmark list
                        bookmark.hashid = hash_ids.encode(bookmark.href);

                        unread_bookmarks.push(bookmark);
                    }
                });

                response.end(JSON.stringify(unread_bookmarks));
            }
        }
    });
};
