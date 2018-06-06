import React from 'react';
import PropTypes from 'prop-types';
import TableHeader from '../TableHeader'
import TableBody from '../TableBody'

const propTypes = {
    data: PropTypes.array.isRequired
};

const defaultProps = {};

export default class Table extends React.Component {
    render() {
        const columns = Object.keys(this.props.data[0])
            .map(item => item);

        return (
            <table className="ui celled table">
                <TableHeader 
                    columns={columns} />
                <TableBody
                    data={this.props.data} />
            </table>
        );
    }
}

 Table.propTypes = propTypes;
 Table.defaultProps = defaultProps;