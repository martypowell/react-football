import React, { Component } from 'react';

import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';

class TeamHome extends Component {
    constructor(props) {
        super(props);
        this.state = {
            teams: [],
            isLoaded: false
        };
    }

    componentDidMount() {
        fetch("http://localhost:1919/teams")
            .then(res => res.json())
            .then(teams => {
                this.setState({
                    teams: teams,
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
        const { name, wins, losses, draws } = this.props;
        const getPoints = (wins, draws) => (wins * 3) + draws;
        return (
            <div>
                <h1>{name}</h1>
                <div className="results">
                    <p className="wins">Wins: {wins}</p>
                    <p className="losses">Losses: {losses}</p>
                    <p className="draws">Draws: {draws}</p>
                    <p className="summary">{ getPoints(wins, draws) } Points</p>
                </div>
            </div>
        );
    }
}

export default TeamHome;