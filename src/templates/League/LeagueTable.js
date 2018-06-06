import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Table from '../../components/Table';

const propTypes = {
    data: PropTypes.array.isRequired,

    name: PropTypes.string.isRequired,
};

const defaultProps = {};

class LeagueStandings extends Component {
    render() {
        return (
            <React.Fragment>
                <h1>{this.props.name}</h1>
                <Table 
                    data={this.props.data} 
                    className="leagueTable" />
            </React.Fragment>
        );
    }
}

LeagueStandings.propTypes = propTypes;
LeagueStandings.defaultProps = defaultProps;

export default LeagueStandings;