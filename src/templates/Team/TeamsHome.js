import React, { Component } from 'react';
import { List } from 'semantic-ui-react';

import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';

class TeamsHome extends Component {
    constructor(props) {
        super(props);
        this.state = {
            teams: [],
            isLoaded: false
        };
    }

    componentDidMount() {
        // Ajax Would go here instead 
        fetch("http://localhost:1919/teams")
            .then(res => res.json())
            .then(teams => {
                console.log(teams);
                this.setState({
                    teams: teams,
                    isLoaded: true
                })
            });
    }

    render() {
        return (
            <React.Fragment>
                {
                    this.state.teams.map(team => {
                        return <List key={team._id}>{team.name}</List>;
                    })
                }
            </React.Fragment>
        );
    }
}

export default TeamsHome;