import React from 'react';

class Recent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            error: false,
            loaded: false,
            bookmarks: []
        };
    }

    componentDidMount() {
        fetch('/api/pinboard_recent').then(response => response.json()).then(
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
            return <article><h2>Recent</h2><p class="error">{error}</p></article>;
        } else if (!loaded) {
            return <article><h2>Recent</h2><p class="loading">Loading...</p></article>;
        } else {
            return (
                <article>
                    <h2>Recent</h2>
                    
                    <ul class="bookmarks">
                        {bookmarks.map(bookmark => (
                            <li class={bookmark.toread === 'yes' ? 'unread' : ''}>
                                <a href={bookmark.href}>{bookmark.description}</a>
                            </li>
                        ))}        
                    </ul>
                </article>
            );
        }
    }
}

export default Recent;
