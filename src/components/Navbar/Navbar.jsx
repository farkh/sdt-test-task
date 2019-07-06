import React from 'react';
import { NavLink } from 'react-router-dom';

import './_navbar.scss';

const Navbar = () => {
    return (
        <div className="navbar">
            <NavLink to="/" className="navbar__logo">SDTTestTask</NavLink>

            <nav className="navbar__nav">
                <NavLink
                    to="/requests"
                    className="navbar__link"
                    activeClassName="navbar__link--active"
                >
                    Requests
                </NavLink>
            </nav>
        </div>
    );
};

export default Navbar;
