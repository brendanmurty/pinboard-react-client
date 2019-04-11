# Pinboard API Documentation (v1)

_Last updated October 15, 2014 (removed language about oauth, added ban policy for third-party sites that store passwords)._

The Pinboard API is a way to interact programatically with your bookmarks, notes and other Pinboard data.

Wherever possible the Pinboard API uses the same syntax and method names as the Delicious V1 API. See differences from Delicious for a full list of areas where the APIs diverge.

## Methods

All API methods are GET requests, even when good REST habits suggest they should use a different verb.

Methods return data in XML (default) or JSON format. Click on the example link below any method to see a formatted response.

### https://api.pinboard.in/v1/posts/update

Returns the most recent time a bookmark was added, updated or deleted.

Use this before calling posts/all to see if the data has changed since the last fetch.

### https://api.pinboard.in/v1/posts/add

Add a bookmark. Arguments with shaded background are required.
<table class="arguments" cellpadding="8" cellspacing="0">
<tbody><tr><th width="80">argument</th><th width="70">type</th><th>comment</th></tr>
<tr class="required"><td valign="top"><b>url</b></td><td valign="top"><a href="#entity_url"><code class="entity">url</code></a></td><td valign="top">the URL of the item</td></tr>
<tr class="required"><td valign="top"><b>description</b></td><td valign="top"><a href="#entity_title"><code class="entity">title</code></a></td><td valign="top">Title of the item.  This field is unfortunately named 'description' for backwards compatibility with the delicious API</td></tr>
<tr><td valign="top">extended</td><td valign="top"><a href="#entity_text"><code class="entity">text</code></a></td><td valign="top">Description of the item.  Called 'extended' for backwards compatibility with delicious API</td></tr>
<tr><td valign="top">tags</td><td valign="top"><a href="#entity_tag"><code class="entity">tag</code></a></td><td valign="top">List of up to 100 tags</td></tr>
<tr><td valign="top">dt</td><td valign="top"><a href="#entity_datetime"><code class="entity">datetime</code></a></td><td valign="top">creation time for this bookmark.  Defaults to current time. <a name="future">Datestamps more than 10 minutes ahead of server time</a> will be reset to current server time</td></tr>
<tr><td valign="top">replace</td><td valign="top"><a href="#entity_yes/no"><code class="entity">yes/no</code></a></td><td valign="top">Replace any existing bookmark with this URL.  Default is yes.  If set to no, will throw an error if bookmark exists</td></tr>
<tr><td valign="top">shared</td><td valign="top"><a href="#entity_yes/no"><code class="entity">yes/no</code></a></td><td valign="top">Make bookmark public.  Default is "yes" unless user has enabled the "save all bookmarks as private" user setting, in which case default is "no"</td></tr>
<tr><td valign="top">toread</td><td valign="top"><a href="#entity_yes/no"><code class="entity">yes/no</code></a></td><td valign="top">Marks the bookmark as unread.  Default is "no"</td></tr>
</tbody></table>

### https://api.pinboard.in/v1/posts/delete

Delete a bookmark. Arguments with shaded background are required.

<table class="arguments" cellpadding="8" cellspacing="0">
<tbody><tr><th width="80">argument</th><th width="70">type</th><th>comment</th></tr>
<tr class="required"><td valign="top"><b>url</b></td><td valign="top"><a href="#entity_url"><code class="entity">url</code></a></td><td valign="top"></td></tr>
</tbody></table>

### https://api.pinboard.in/v1/posts/get

Returns one or more posts on a single day matching the arguments. If no date or url is given, date of most recent bookmark will be used.

<table class="arguments" cellpadding="8" cellspacing="0">
<tbody><tr><th width="80">argument</th><th width="70">type</th><th>comment</th></tr>
<tr><td valign="top">tag</td><td valign="top"><a href="#entity_tag"><code class="entity">tag</code></a></td><td valign="top">filter by up to three tags</td></tr>
<tr><td valign="top">dt</td><td valign="top"><a href="#entity_date"><code class="entity">date</code></a></td><td valign="top">return results bookmarked on this day</td></tr>
<tr><td valign="top">url</td><td valign="top"><a href="#entity_url"><code class="entity">url</code></a></td><td valign="top">return bookmark for this URL</td></tr>
<tr><td valign="top">meta</td><td valign="top"><a href="#entity_yes/no"><code class="entity">yes/no</code></a></td><td valign="top">include a change detection signature in a meta attribute</td></tr>
</tbody></table>

### https://api.pinboard.in/v1/posts/recent

Returns a list of the user's most recent posts, filtered by tag.

<table class="arguments" cellpadding="8" cellspacing="0">
<tbody><tr><th width="80">argument</th><th width="70">type</th><th>comment</th></tr>
<tr><td valign="top">tag</td><td valign="top"><a href="#entity_tag"><code class="entity">tag</code></a></td><td valign="top">filter by up to three tags</td></tr>
<tr><td valign="top">count</td><td valign="top"><a href="#entity_int"><code class="entity">int</code></a></td><td valign="top">number of results to return. Default is 15, max is 100</td></tr>
</tbody></table>

### https://api.pinboard.in/v1/posts/dates

Returns a list of dates with the number of posts at each date.

<table class="arguments" cellpadding="8" cellspacing="0">
<tbody><tr><th width="80">argument</th><th width="70">type</th><th>comment</th></tr>
<tr><td valign="top">tag</td><td valign="top"><a href="#entity_tag"><code class="entity">tag</code></a></td><td valign="top">filter by up to three tags</td></tr>
</tbody></table>

### https://api.pinboard.in/v1/posts/all

Returns all bookmarks in the user's account.

<table class="arguments" cellpadding="8" cellspacing="0">
<tbody><tr><th width="80">argument</th><th width="70">type</th><th>comment</th></tr>
<tr><td valign="top">tag</td><td valign="top"><a href="#entity_tag"><code class="entity">tag</code></a></td><td valign="top">filter by up to three tags</td></tr>
<tr><td valign="top">start</td><td valign="top"><a href="#entity_int"><code class="entity">int</code></a></td><td valign="top">offset value (default is 0)</td></tr>
<tr><td valign="top">results</td><td valign="top"><a href="#entity_int"><code class="entity">int</code></a></td><td valign="top">number of results to return. Default is all</td></tr>
<tr><td valign="top">fromdt</td><td valign="top"><a href="#entity_datetime"><code class="entity">datetime</code></a></td><td valign="top">return only bookmarks created after this time</td></tr>
<tr><td valign="top">todt</td><td valign="top"><a href="#entity_datetime"><code class="entity">datetime</code></a></td><td valign="top">return only bookmarks created before this time</td></tr>
<tr><td valign="top">meta</td><td valign="top"><a href="#entity_int"><code class="entity">int</code></a></td><td valign="top">include a change detection signature for each bookmark</td></tr>
</tbody></table>

### https://api.pinboard.in/v1/posts/suggest

Returns a list of popular tags and recommended tags for a given URL.

Popular tags are tags used site-wide for the url; recommended tags are drawn from the user's own tags.

<table class="arguments" cellpadding="8" cellspacing="0">
<tbody><tr><th width="80">argument</th><th width="70">type</th><th>comment</th></tr>
<tr class="required"><td valign="top"><b>url</b></td><td valign="top"><a href="#entity_url"><code class="entity">url</code></a></td><td valign="top"></td></tr>
</tbody></table>

### https://api.pinboard.in/v1/tags/get

Returns a full list of the user's tags along with the number of times they were used.

### https://api.pinboard.in/v1/tags/delete

Delete an existing tag.

<table class="arguments" cellpadding="8" cellspacing="0">
<tbody><tr><th width="80">argument</th><th width="70">type</th><th>comment</th></tr>
<tr class="required"><td valign="top"><b>tag</b></td><td valign="top"><a href="#entity_tag"><code class="entity">tag</code></a></td><td valign="top"></td></tr>
</tbody></table>

### https://api.pinboard.in/v1/tags/rename

Rename an tag, or fold it in to an existing tag

<table class="arguments" cellpadding="8" cellspacing="0">
<tbody><tr><th width="80">argument</th><th width="70">type</th><th>comment</th></tr>
<tr class="required"><td valign="top"><b>old</b></td><td valign="top"><a href="#entity_tag"><code class="entity">tag</code></a></td><td valign="top">note: match is not case sensitive</td></tr>
<tr class="required"><td valign="top"><b>new</b></td><td valign="top"><a href="#entity_tag"><code class="entity">tag</code></a></td><td valign="top">if empty, nothing will happen</td></tr>
</tbody></table>

### https://api.pinboard.in/v1/user/secret

Returns the user's secret RSS key (for viewing private feeds)

### https://api.pinboard.in/v1/user/api_token/

Returns the user's API token (for making API calls without a password)

### https://api.pinboard.in/v1/notes/list

Returns a list of the user's notes

### https://api.pinboard.in/v1/notes/ID

Returns an individual user note. The hash property is a 20 character long sha1 hash of the note text.

## Encoding

All entities are encoded as UTF-8. In the length limits below, 'characters' means logical characters rather than bytes.

All arguments should be passed URL-encoded. Where multiple arguments are allowed, they should be separated by URL-encoded whitespace (apple+pear+orange)

## Data Types

The Pinboard API recognizes the following data types:

<dl>

<dt><a name="entity_tag"><code class="entity">tag</code></a></dt>
<dd>up to 255 characters. May not contain commas or whitespace.  Please be aware that tags beginning with a period are treated as private and trigger special <a href="/tour/#privacy">private tag semantics</a>.</dd>
<dt><a name="entity_url"><code class="entity">URL</code></a></dt>
<dd>as defined by <a href="http://www.apps.ietf.org/rfc/rfc3986.html">RFC 3986</a>.  Allowed schemes are <code>http</code>, <code>https</code>, <code>javascript</code>, <code>mailto</code>, <code>ftp</code> and <code>file</code>.  The Safari-specific <code>feed</code> scheme is allowed but will be treated as a synonym for <code>http</code>.</dd>
<dt><a name="entity_title"><code class="entity">title</code></a></dt>
<dd>up to 255 characters long</dd>
<dt><a name="entity_description"><code class="entity">text</code></a></dt>
<dd>up to 65536 characters long.  Any URLs will be auto-linkified when displayed.</dd>
<dt><a name="entity_datetime"><code class="entity">datetime</code></a></dt>
<dd>UTC timestamp in this format: 2010-12-11T19:48:02Z.  Valid date range is Jan 1, 1 AD to January 1, 2100 (but see <a href="#future">note below about future timestamps</a>).</dd>
<dt><a name="entity_date"><code class="entity">date</code></a></dt>
<dd>UTC date in this format: 2010-12-11. Same range as <code class="entity">datetime</code> above</dd>
<dt><a name="entity_yes/no"><code class="entity">yes/no</code></a></dt>
<dd>the literal string 'yes' or 'no'</dd>
<dt><a name="entity_md5"><code class="entity">md5</code></a></dt>
<dd>32 character hexadecimal MD5 hash</dd>
<dt><a name="entity_integer"><code class="entity">integer</code></a></dt>
<dd>integer in the range 0..2<sup>32</sup></dd>
<dt><a name="entity_format"><code class="entity">format</code></a></dt>
<dd>the literal string 'json' or 'xml'</dd>
</dl>

## Authentication

The Pinboard v1 API requires you to use HTTPS. There are two ways to authenticate:

1. Regular HTTP Auth:
https://user:password@api.pinboard.in/v1/method
2. API authentication tokens:
https://api.pinboard.in/v1/method?auth_token=user:NNNNNN
An authentication token is a short opaque identifier in the form "username:TOKEN".

Users can find their API token on their settings page. They can request a new token at any time; this will invalidate their previous API token.

Any third-party sites making API requests on behalf of Pinboard users from an outside server MUST use this authentication method instead of storing the user's password. Violators will be blocked from using the API.

## Rate Limits

API requests are limited to one call per user every three seconds, except for the following:

- posts/all - once every five minutes
- posts/recent - once every minute

If you need to make unusually heavy use of the API, please consider discussing it with me first, to avoid unhappiness.

Make sure your API clients check for 429 Too Many Requests server errors and back off appropriately. If possible, keep doubling the interval between requests until you stop receiving errors.

## Error Handling

The Pinboard API does its best to mimic the behavior Delicious API. If something goes wrong, you'll get the mysterious:

`<result code="something went wrong" />`

If an action succeeds, you'll get:

`<result code="done" />`

Or their JSON equivalents.

## Differences From Delicious API

1. Pinboard is way more awesome.
2. No support for tag bundles.
3. `posts/update` does not return an inboxnew attribute.
4. `posts/delete` returns `<result code="item not found" />` if the user does not have that URL in their bookmarks. Delicious does not return an error in this context.
5. `posts/get` - Pinboard response does not include a "tag" attribute.
6. `posts/get` - the hashes argument is not supported.
7. `posts/all?hashes` is not implemented
8. `posts/suggest` - the top level element is called 'suggested' rather than 'suggest'

## Support

To report bugs in the API or this documentation, please contact [support@pinboard.in](mailto:support@pinboard.in).

If you have an API feature idea, please post it to the Google group (pinboard-dev) for discussion.

You can find me on Twitter as @pinboard and on IRC as #pinboard on freenode.