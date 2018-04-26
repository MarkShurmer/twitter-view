import React, { Component } from 'react';
import Tweets from './tweets';
import './app.css';

class App extends Component {
    render() {
        return (
            <div className="app">
                <h1>Twitter from CNN</h1>
                <Tweets data={this.props.data} />
            </div>
        )
    }
}

export default App
