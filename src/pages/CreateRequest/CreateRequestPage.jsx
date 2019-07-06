import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter, NavLink } from 'react-router-dom';

import { addRequest } from '../../redux/actions/requestActions';
import './_create-request-page.scss';

class CreateRequestPage extends Component {
    static propTypes = {
        addRequest: PropTypes.func.isRequired,
        projectsState: PropTypes.shape({
            projects: PropTypes.arrayOf(PropTypes.shape({
                title: PropTypes.string,
                value: PropTypes.string,
            })),
        }).isRequired,
    };
    
    state = {
        title: '',
        text: '',
        project: '',
        priority: 0,
    };
    
    _handleInputChange = (e) => {
        const { name, value } = e.target;

        this.setState({ [name]: value });
    };

    _handleSubmit = (e) => {
        if (e) e.preventDefault();
        const { title, text, project, priority } = this.state;
        const date = new Date().toLocaleDateString();

        if (title.length === 0 || text.length === 0 || project.length === 0) return;
        
        this.props.addRequest({ title, text, project, priority, date });
        this.props.history.push('/requests');
    };
    
    render() {
        const { projectsState } = this.props;
        const { title, text, project, priority } = this.state;
        const isSubmitActive = title.length > 0 && text.length > 0 && project.length > 0;
        const { projects } = projectsState;
        
        return (
            <div className="create-page">
                <div className="create-page__header mb-2">
                    <h1 className="workspace__title">Create Request</h1>
                </div>

                <form
                    className="workspace__form"
                    onSubmit={this._handleSubmit}
                >
                    <input
                        type="text"
                        className="workspace__input mb-2"
                        placeholder="Title"
                        name="title"
                        id="title"
                        onChange={this._handleInputChange}
                        value={title}
                    />

                    <textarea
                        className="workspace__textarea mb-2"
                        placeholder="Description"
                        name="text"
                        id="text"
                        onChange={this._handleInputChange}
                        value={text}
                    />

                    <select
                        name="project"
                        id="project"
                        onChange={this._handleInputChange}
                        value={project}
                    >
                        <option value="">Project</option>
                        {projects && projects.length > 0 && projects.map(project => (
                            <option key={project.value} value={project.value}>{project.title}</option>
                        ))}
                    </select>
                    <NavLink to="/projects/new" className="link mb-2">Create project</NavLink>

                    <select
                        name="priority"
                        id="priority"
                        className="mb-4"
                        onChange={this._handleInputChange}
                        value={priority}
                    >
                        <option value="0">Low</option>
                        <option value="1">Normal</option>
                        <option value="2">High</option>
                    </select>
                    
                    <input
                        type="submit"
                        value="Add request"
                        className="btn btn--primary"
                        onClick={this._handleSubmit}
                        disabled={!isSubmitActive}
                    />
                </form>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    projectsState: state.projectsReducer,
});

export default withRouter(connect(mapStateToProps, { addRequest })(CreateRequestPage));
