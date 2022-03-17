import React from 'react';
import PropTypes from 'prop-types';
import './menu.scss';
const propTypes = {};

const defaultProps = {};

const Menu = ({menuOpen, setMenuOpen}) => {
    return (
    <div className={`menu ${menuOpen && 'active'}`}>
        <ul>
            <li onClick={() => setMenuOpen(false)}>
                <a href='#intro'>Home</a>
            </li>
            <li onClick={() => setMenuOpen(false)}>
                <a href='#portfolio'>Portfolio</a>
            </li>
            <li onClick={() => setMenuOpen(false)}>
                <a href='#works'>Works</a>
            </li>
            <li onClick={() => setMenuOpen(false)}>
                <a href='#testimonials'>Testimonials</a>
            </li>
            <li onClick={() => setMenuOpen(false)}>
                <a href='#contact'>Contact</a>
            </li>
        </ul>
    </div>);
}

Menu.propTypes = propTypes;
Menu.defaultProps = defaultProps;

export default Menu;