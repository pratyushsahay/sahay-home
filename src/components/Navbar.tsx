import React, { useState} from "react";
import { Link } from 'react-router-dom';
import Button from "./Button";
import './Navbar.css';

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    }

    window.addEventListener('resize', showButton);
    window.addEventListener('DOMContentLoaded', showButton);

    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                        <Link to='/' className="navbar-logo" onClick={closeMobileMenu}>
                            sahay-home <i className="fab fa-typo3"></i>
                        </Link>

                        <div className="menu-icon" onClick={handleClick}>
                            <i className={click ? 'fas fa-times' : 'fas fa-bars'}/>
                        </div>
                        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                            <li className="nav-item">
                                <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                                    Home
                                </Link>

                            </li>
                            <li className="nav-item">
                                <Link to="/reddit-scraper" className="nav-links" onClick={closeMobileMenu}>
                                    Reddit Scraper
                                </Link>

                            </li>
                            <li className="nav-item">
                                <Link to="/blog" className="nav-links" onClick={closeMobileMenu}>
                                    Blog
                                </Link>

                            </li>
                        </ul>
                        {button && <Button className='btn-mobile'  buttonStyle='btn--outline'>LOGIN</Button>}
                </div>
            </nav>
        </>
    );
}

export default Navbar;