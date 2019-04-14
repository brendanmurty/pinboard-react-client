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
    }

    componentDidMount() {
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
            return <p class="error">{error}</p>;
        } else if (!loaded) {
            return <p class="loading">Loading...</p>;
        } else {
            return (
                <ul class="bookmarks">
                    {bookmarks.map(bookmark => (
                        <li class={bookmark.toread === 'yes' ? 'bookmark unread' : 'bookmark'}>
                            <a href={bookmark.href} class="title">
                                {bookmark.description}
                            </a>
                            <a href={"/bookmark/" + bookmark.hash} class="edit">
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
