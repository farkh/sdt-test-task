import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactTable from 'react-table';
import 'react-table/react-table.css';

import './_custom-table.scss';

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
        return a.localeCompare(b);
    };

    _getPriorityLabelByCode = (code) => {
        switch (code) {
            case 0:
                return 'Low';
            case 1:
                return 'Medium';
            case 2:
                return 'High';
            default:
                return 'Low';
        }
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
                Cell: props => (
                    <div className={`priority priority--${this._getPriorityLabelByCode(props.original.priority).toLowerCase()} pl-3`}>
                        {this._getPriorityLabelByCode(props.original.priority)}
                    </div>
                ),
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
