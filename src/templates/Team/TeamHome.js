import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';

import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';

class TeamHome extends Component {
    constructor(props) {
        super(props);
        this.state = {
            team: {},
            isLoaded: false
        };
    }

    componentDidMount() {
        const teamId = this.props.match.params.id;
        fetch(`http://localhost:1919/teams/${teamId}`)
            .then(res => res.json())
            .then(team => {
                this.setState({
                    team,
                    isLoaded: true
                })
            },
            // Note: it's important to handle errors here
            // instead of a catch() block so that we don't swallow
            // exceptions from actual bugs in components.
            (error) => {
              this.setState({
                isLoaded: true,
                error
              });
            });
    }

    render() {
        const { name, league, stadium } = this.state.team;
        const getPoints = (wins, draws) => (wins * 3) + draws;
        return (
            <Container>
                <h1>{name}</h1>
                <p>{league}</p>
                <p>{stadium}</p>
            </Container>
        );
    }
}

export default TeamHome;