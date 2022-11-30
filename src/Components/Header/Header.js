import { faDumbbell, faSignature, faSignIn } from '@fortawesome/free-solid-svg-icons';
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div className='header'>
            <div>
                <p className='icon'><FontAwesomeIcon icon={faSignature}></FontAwesomeIcon></p>
            </div>
            <div>
                <h1>This is my React Web Application</h1>
            </div>
        </div>
    );
};

export default Header;