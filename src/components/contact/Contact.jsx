import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './contact.scss';
import { SpaRounded } from '@material-ui/icons';

const propTypes = {}; 

const defaultProps = {};

const Contact = () => {

    const [message, setMessage] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault();
        setMessage(true)
    }

    return (
        <div className="contact" id="contact">
            <div className="left">
                <img src="assets/shake.svg" alt="" />
            </div>
            <div className="right">
                <h2>Contact.</h2>
                <form onSubmit={(e) => handleSubmit(e)}>
                    <input type="text" placeholder='Email'/>
                    <textarea placeholder='Message'></textarea>
                    <button type='submit'>Send</button>
                    {message && <span>Thanks I'll reply ASAP :)</span>}
                </form>
            </div>
        </div>
    );
}

Contact.propTypes = propTypes;
Contact.defaultProps = defaultProps;

export default Contact;