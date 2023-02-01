// UI: Unread - Show a list of the user's unread bookmarks, a loading message or a error message

import React from 'react';

import BookmarkList from '@components/BookmarkList/BookmarkList';

class Unread extends React.Component {
  constructor(props) {
    // Prepare the component's properties
    super(props);

    this.state = {
      error: false,
      loaded: false,
      bookmarks: []
    };
  }

  componentDidMount() {
    // Attempt to load the data from the API
    fetch('/api/unread').then(response => response.json()).then(
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
      // Show a list of the unread bookmarks returned from the API
      return (
        <BookmarkList bookmarks={ bookmarks } />
      );
    }
  }
}

export default Unread;
