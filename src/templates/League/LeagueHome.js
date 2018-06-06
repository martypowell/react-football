import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';

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
                this.setState({
                    teams: teams,
                    isLoaded: true
                })
            });
    }

    render() {
        return (
            <div className="leagueHome">
                <h1>League Name Goes Here</h1>
                <ul>
                    {
                        this.state.teams.map(team => {
                            return <li key={team._id}>{team.name} - {team.stadium}</li>;
                        })
                    }
                </ul>
                <Button>Add Team</Button>
            </div>
        );
    }
}

export default TeamsHome;