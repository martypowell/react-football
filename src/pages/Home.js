import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
    render() {
        return (
            <div>
                <h1>My Football App</h1>
                <Link to="/teams/edit">Add Team</Link>
            </div>
        );
    }
}

export default Home;