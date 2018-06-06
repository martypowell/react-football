import React from 'react';
import PropTypes from 'prop-types';
import {
    BrowserRouter as Router,
    Route,
    Link
  } from 'react-router-dom'

const propTypes = {
    data: PropTypes.array.isRequired
};

const defaultProps = {};

export default class TableBody extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <tbody>
                {
                    this.props.data.map(row => {
                        const columns = Object.keys(row).map(column => {
                            if (column === 'id')  return;

                            if (column === 'team') {
                                return <td>{row[column]}</td>;    
                            }
                            return <td>{row[column]}</td>;
                        });
                        return <tr>{columns}</tr>;
                    })
                }
            </tbody>
        );
    }
}

 TableBody.propTypes = propTypes;
 TableBody.defaultProps = defaultProps;