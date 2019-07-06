import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactTable from 'react-table';
import 'react-table/react-table.css';

class CustomTable extends Component {
    static propTypes = {
        data: PropTypes.arrayOf(PropTypes.shape({
            id: PropTypes.oneOfType([
                PropTypes.string,
                PropTypes.number,
            ]),
            title: PropTypes.string,
            text: PropTypes.string,
            project: PropTypes.string,
            priority: PropTypes.number,
            date: PropTypes.string,
        })).isRequired,
    };
    
    _sort = (a, b) => {
        if (a.length === b.length) return a > b ? 1 : -1;

        return a.length > b.length ? 1 : -1;
    };
    
    render() {
        const { data } = this.props;
        const columns = [
            {
                Header: 'Title',
                accessor: 'title',
                sortMethod: this._sort,
            },
            {
                Header: 'Description',
                accessor: 'text',
                sortMethod: this._sort,
            },
            {
                Header: 'Project',
                accessor: 'project',
                sortMethod: this._sort,
            },
            {
                Header: 'Priority',
                accessor: 'priority',
            },
            {
                Header: 'Date',
                accessor: 'date',
                sortMethod: this._sort,
            },
        ];
        
        return (
            <ReactTable
                data={data}
                columns={columns}
                className="table"
            />
        );
    }
}

export default CustomTable;
