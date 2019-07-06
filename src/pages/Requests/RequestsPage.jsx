import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

import CustomTable from '../../components/CustomTable/CustomTable';

import './_requests-page.scss';

class RequestsPage extends Component {
    static propTypes = {
        requestsState: PropTypes.shape({
            requests: PropTypes.arrayOf(PropTypes.shape({
                title: PropTypes.string,
                text: PropTypes.string,
                project: PropTypes.string,
                priority: PropTypes.number,
                date: PropTypes.string,
            })),
        }).isRequired,
        projectsState: PropTypes.shape({
            projects: PropTypes.arrayOf(PropTypes.shape({
                title: PropTypes.string,
                value: PropTypes.string,
            })),
        }).isRequired,
    };
    
    render() {
        const { requestsState, projectsState } = this.props;
        const { requests } = requestsState;
        const { projects } = projectsState;
        
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
                            {projects && projects.length > 0 && projects.map(project => (
                                <option key={project.value} value={project.value}>{project.title}</option>
                            ))}
                        </select>
                        
                        <NavLink to="/requests/new" className="btn btn--primary ml-1">Add request</NavLink>
                    </div>
                </div>

                <CustomTable
                    data={requests}
                />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    requestsState: state.requestsReducer,
    projectsState: state.projectsReducer,
});

export default connect(mapStateToProps)(RequestsPage);
