import * as React from "react";
import { Link } from 'react-router-dom';

export const NavBar_base: React.FC = () => {
    return (
        <div>
            <nav className="navbar">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        <img src="/src/assets/react.svg" alt="Logo" width="30" height="24"
                             className="d-inline-block align-text-top"/>
                        React + Vite
                    </a>
                </div>
            </nav>
        </div>
    )
}

export const NavBar_avanzata = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">Home</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/services">Services</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/contact">Contact</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
export default {NavBar_base, NavBar_avanzata}