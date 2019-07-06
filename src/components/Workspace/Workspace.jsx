import React from 'react';
import PropTypes from 'prop-types';

import Navbar from '../Navbar/Navbar';

import './_workspace.scss';

const Workspace = ({ children }) => {
    return (
        <div className="workspace">
            <Navbar />
            
            {children}
        </div>
    );
};

Workspace.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
    ]).isRequired,
};

export default Workspace;
