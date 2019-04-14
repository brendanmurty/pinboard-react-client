import React from 'react';

class Unread extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            error: false,
            loaded: false,
            bookmarks: []
        };
    }

    componentDidMount() {
        fetch('/api/unread').then(response => response.json()).then(
            (response) => {
                this.setState({
                    loaded: true,
                    bookmarks: response
                });
            },
            (error) => {
                this.setState({
                    loaded: true,
                    error
                });
            }
        );
    }

    render() {
        const { error, loaded, bookmarks } = this.state;

        if (error) {
            return <p class="error">{error}</p>;
        } else if (!loaded) {
            return <p class="loading">Loading...</p>;
        } else {
            return (
                <ul class="bookmarks">
                    {bookmarks.map(bookmark => (
                        <li class="bookmark unread">
                            <a href={bookmark.href} class="title">
                                <span class="title">{bookmark.description}</span>
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

export default Unread;
