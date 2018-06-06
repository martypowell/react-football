import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import LeagueHome from './templates/League/LeagueHome';
import LeagueStandingsTemplate from './templates/League/LeagueTable';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      leagueData: [
        {
            id: 1,
            team: 'Manchester City',
            wins: 2,
            losses: 1,
            draws: 0
        },
        {
            id: 2,
            team: 'Arsenal',
            wins: 3,
            losses: 0,
            draws: 1
        },
        {
            id: 3,
            team: 'Manchester United',
            wins: 0,
            losses: 100,
            draws: 0
        }
    ]
    };
  }
  render() {
    return (
      <React.Fragment>
        <LeagueHome />
        <LeagueStandingsTemplate 
          name="Premier League"
          data={this.state.leagueData} />
      </React.Fragment>
    );
  }
}

export default App;
