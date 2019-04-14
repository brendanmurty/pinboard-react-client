// API: /api/pinboard_unread

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

                // Get the unread bookmarks only
                unread_bookmarks = [];
                api_response.forEach (function(bookmark) {
                    if (bookmark.toread == 'yes') {
                        bookmark.hashid = hash_ids.encode(bookmark.href);
                        unread_bookmarks.push(bookmark);
                    }
                });

                response.end(JSON.stringify(unread_bookmarks));
            }
        }
    });
};
