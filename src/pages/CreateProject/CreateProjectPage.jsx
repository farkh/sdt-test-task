import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter, NavLink } from 'react-router-dom';

import { addProject } from '../../redux/actions/projectActions';

class CreateRequestPage extends Component {
    static propTypes = {
        addProject: PropTypes.func.isRequired,
    };
    
    state = {
        title: '',
    };
    
    _handleInputChange = (e) => {
        const { name, value } = e.target;

        this.setState({ [name]: value });
    };

    _handleSubmit = (e) => {
        if (e) e.preventDefault();
        const { title } = this.state;

        if (title.length === 0) return;
        
        this.props.addProject({ title, value: this._convertTitleToValue(title) });
        this.props.history.goBack();
    };

    _convertTitleToValue = (title) => {
        return title.toLowerCase().split(' ').join('_');
    };
    
    render() {
        const { title } = this.state;
        const isSubmitActive = title.length > 0;
        
        return (
            <div className="create-page">
                <div className="create-page__header mb-2">
                    <h1 className="workspace__title">Create Project</h1>
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

export default withRouter(connect(null, { addProject })(CreateRequestPage));
