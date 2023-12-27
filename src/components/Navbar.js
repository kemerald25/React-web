import React from "react";
import '../styles.css';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav>
            <div className="navbar">
                <Link to="/" className="logo">Favor Bless Media</Link>
                <ul className="nav-items">
                    <li>
                        <Link to="/" className="link">Home</Link>
                    </li>
                    <li>
                        <Link to="/about" className="link">About</Link>
                    </li>
                    <li>
                        <Link to="/service" className="link">Services</Link>
                    </li>
                    <li>
                        <Link to="/contact" className="link">Contact</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;