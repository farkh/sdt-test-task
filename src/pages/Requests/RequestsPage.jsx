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

    state = {
        selectedProject: '',
        requests: [],
    };

    componentDidMount() {
        const { requestsState } = this.props;
        const { requests } = requestsState;

        this.setState({ requests });
    }

    componentWillReceiveProps(nextProps) {
        const { requestsState } = nextProps;
        const { requests } = requestsState;

        this.setState({ requests });
    }

    _handleSelectChange = (e) => {
        const { value } = e.target;
        
        this.setState({ selectedProject: value }, () => {
            this._filterByProject();
        });
    };
    
    _filterByProject = () => {
        const { projectsState, requestsState } = this.props;
        const { selectedProject } = this.state;
        const { projects } = projectsState;
        const { requests } = requestsState;
        
        if (selectedProject === '') {
            this.setState({ requests });
            return;
        }

        const selectedProjectTitle = projects.filter(item => item.value === selectedProject)[0].title;
        const filteredRequests = requests.filter(item => item.project === selectedProjectTitle);

        this.setState({ requests: filteredRequests });
    };
    
    render() {
        const { projectsState } = this.props;
        const { selectedProject, requests } = this.state;
        const { projects } = projectsState;
        
        return (
            <div className="requests">
                <div className="requests__header">
                    <h1 className="workspace__title">Incoming Requests</h1>

                    <div className="requests__buttons">
                        <select
                            name="selectedProject"
                            id="project"
                            className="select"
                            value={selectedProject}
                            onChange={this._handleSelectChange}
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
