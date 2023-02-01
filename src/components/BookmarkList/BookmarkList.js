import React from 'react';

import './BookmarkList.css';

class BookmarkList extends React.Component {

  constructor(properties) {
    super(properties);

    this.state = {
      bookmarks: properties.bookmarks
    };
  }

  render() {

    return (
      <ul className="bookmarks">
        {this.state.bookmarks.map(bookmark => (
        <li className={ bookmark.toread === 'yes' ? 'bookmark unread' : 'bookmark read' }>
          <a href={ bookmark.href } className="title">
            { bookmark.description }
          </a>
          <a href={ "/edit/" + bookmark.hash } className="edit-link">
            Edit
          </a>
        </li>
        ))}
      </ul>
    );

  }

}

export default BookmarkList;
