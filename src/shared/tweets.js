import React, {Component} from 'react';
import './tweets.css';

class Tweets extends Component {
    render() {
        const tweets = this.props.data;

        return (
            <div className="tweet-list">
                {tweets.length === 0
                    ?
                    <div>Unable to retreive latest</div>
                    :
                    tweets.map(({id, text, link, creationTime}) => (
                        <div className="tweet" key={id}>
                            <a href={link} target="_blank" className="tweet-item">
                                <div className="tweet-text">{text}</div>
                                <div className="tweet-time">{creationTime}</div>
                            </a>
                        </div>
                    ))
                }
            </div>
        )
    }
}

export default Tweets;
