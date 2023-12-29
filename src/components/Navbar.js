import React, { useEffect } from "react";
import '../styles.css';
import '../index.css';
import { Link } from 'react-router-dom';

function Navbar() {
    useEffect(() => {
        const hamburger = document.querySelector(".hamburger");
        const navMenu = document.querySelector(".nav-items");

        const handleClick = () => {
            hamburger.classList.toggle("active");
            navMenu.classList.toggle("active");
        };

        hamburger.addEventListener("click", handleClick);

        document.querySelectorAll(".link").forEach((n) =>
            n.addEventListener("click", () => {
                hamburger.classList.remove("active");
                navMenu.classList.remove("active");
            })
        );

        // Cleanup the event listeners when the component unmounts
        return () => {
            hamburger.removeEventListener("click", handleClick);

            document.querySelectorAll(".link").forEach((n) =>
                n.removeEventListener("click", () => {
                    hamburger.classList.remove("active");
                    navMenu.classList.remove("active");
                })
            );
        };
    }, []);

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

                <div className="hamburger">
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
