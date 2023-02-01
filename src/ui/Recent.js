// UI: Recent - Show a list of the user's recent bookmarks, a loading message or a error message

import React from 'react';

class Recent extends React.Component {
  constructor(props) {
    // Prepare the component's properties
    super(props);

    this.state = {
      error: false,
      loaded: false,
      bookmarks: []
    };

    // Attempt to load the data from the API
    fetch('/api/recent').then(response => response.json()).then(
    (response) => {
      // Valid response in JSON format
      this.setState({
      loaded: true,
      bookmarks: response
      });
    },
    (error) => {
      // Error encountered
      this.setState({
      loaded: true,
      error
      });
    }
    );
  }

  render() {
    // Load the component's properties
    const { error, loaded, bookmarks } = this.state;

    if (error) {
      return <p className="error">{error}</p>;
    } else if (!loaded) {
      return <p className="loading">Loading...</p>;
    } else {
      return (
        // Return a list of the recent bookmarks returned from the API
        <ul className="bookmarks">
          {bookmarks.map(bookmark => (
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
}

export default Recent;
