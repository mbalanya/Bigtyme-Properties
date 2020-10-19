import React, { Component } from 'react';
import logo from '../images/logo.svg';
import {FaAlignCenter} from 'react-icons/fa';
import {Link} from 'react-router-dom';

export default class Navbar extends Component {
    state = {
        isOpen : false
    }
    handleToggle = () => {
        this.setState({isOpen:!this.state.isOpen})
    }
    render() {
        return (<nav className="navbar">
            <div className="nav-center">
                <div className="nav-header">
                    <Link to="/">
                        <img src={logo} alt="Bigtyme Properties"></img>
                    </Link>
                    <button type="button" className="nav-btn" onClick={this.handleToggle}>
                        <FaAlignCenter className="nav-icon"></FaAlignCenter>
                    </button>
                </div>
                <ul className={this.state.isOpen?"nav-links show-nav":"nav-links"}>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/properties">Properties</Link>
                    </li>
                    <li>
                        <Link to="/about-us">About Us</Link>
                    </li>
                    <li>
                        <Link to="/contact-us">Contact Us</Link>
                    </li>
                    <li>
                        <Link to="/testimonials">Testimonials</Link>
                    </li>
                </ul>
            </div>
        </nav>
        )
    }
}
