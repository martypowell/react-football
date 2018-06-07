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
                this.setState({
                    teams: teams,
                    isLoaded: true
                })
            });
    }

    render() {
        return (
            <React.Fragment>
                <List>
                    {
                            this.state.teams.map(team => {
                                return <List.Item key={team._id}>
                                            <List.Content ><Link to={`/teams/${team._id}`}>{team.name}</Link></List.Content>
                                        </List.Item>
                            })
                    }
                </List>
            </React.Fragment>
        );
    }
}

export default TeamsHome;