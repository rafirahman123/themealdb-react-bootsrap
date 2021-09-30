import React from 'react';
import { Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <nav className="bg-dark p-5 fw-bold mx-1">
            <NavLink to="/home">
                <Button variant="outline-primary">Home</Button>
            </NavLink>
            <NavLink to="/resturent" className="mx-2">
                <Button variant="outline-info">Resturent</Button>
            </NavLink>
        </nav>
    );
};

export default Header;