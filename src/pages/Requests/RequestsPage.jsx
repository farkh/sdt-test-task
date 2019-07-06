import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

import CustomTable from '../../components/CustomTable/CustomTable';

import './_requests-page.scss';

class RequestsPage extends Component {
    render() {
        return (
            <div className="requests">
                <div className="requests__header">
                    <h1 className="workspace__title">Incoming Requests</h1>

                    <div className="requests__buttons">
                        <select
                            name="project"
                            id="project"
                            className="select"
                        >
                            <option value="">All projects</option>
                            <option value="test">Test project</option>
                            <option value="second_project">Second Project</option>
                        </select>
                        
                        <NavLink to="/new" className="btn btn--primary ml-1">Add request</NavLink>
                    </div>
                </div>

                <CustomTable
                    data={[]}
                />
            </div>
        );
    }
}

export default RequestsPage;