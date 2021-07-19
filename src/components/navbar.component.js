import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {

    render() {
        return (
            <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
                <Link to="/" className="navbar-brand">Travel Manager</Link>
                <div className="collpase navbar-collapse">
                    <ul className="navbar-nav mr-auto">
                        <li className="navbar-item">
                            <Link to="/" className="nav-link">Booking List</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/package" className="nav-link">New Package</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/booking" className="nav-link">Booking </Link>
                        </li><li className="navbar-item">
                            <Link to="/edit" className="nav-link">Package List </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}