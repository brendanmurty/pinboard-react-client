import React from 'react';

class BookmarkList extends React.Component {
  constructor(props) {
    // Prepare the component's properties
    super(props);

    this.state = {
      bookmarks: props.bookmarks
    }
  }

  render() {
    return (
      <ul className="bookmarks">
        {this.state.bookmarks.map(bookmark => (
        <li className={bookmark.toread === 'yes' ? 'bookmark unread' : 'bookmark read'}>
          <a href={bookmark.href} className="title">
            {bookmark.description}
          </a>
          <a href={"/bookmark/" + bookmark.hash} className="edit">
            Edit
          </a>
        </li>
        ))}    
      </ul>
    );
  }
}

export default BookmarkList;
