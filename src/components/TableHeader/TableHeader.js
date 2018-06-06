import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {};

const defaultProps = {};

export default class TableHeader extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const tableHeadings = this.props.columns.map(column => {
            if (column === 'id')  return;
            return <th>{column}</th>
        });

        return (
            <thead>
                <tr>
                    {tableHeadings}
                </tr>
            </thead>
        );
    }
}

 TableHeader.propTypes = propTypes;
 TableHeader.defaultProps = defaultProps;