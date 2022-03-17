import React from 'react';
import PropTypes from 'prop-types';

import './testimonials.scss'
import { testimonials } from '../../data';

const propTypes = {};

const defaultProps = {};


const Testimonials = () => {
    return (
        <div id='testimonials' className='testimonials'>
            <h1>Testimonials</h1>
            <div className="container">
                {testimonials.map((data, index) => (
                <div className={`card ${data.featured && 'featured'}`} key={data.id}>
                    <div className="top">
                        <img className='left' src="assets/right-arrow.png" alt="" />
                        <img className='user' src={data.img} alt="" />
                        <img className='right' src={data.icon} alt="" />
                    </div>
                    <div className="center">{data.desc}</div>
                    <div className="bottom">
                        <h3>{data.name}</h3>
                        <h4>{data.title}</h4>
                    </div>
                </div>))}
            </div>
        </div>
    );
}

Testimonials.propTypes = propTypes;
Testimonials.defaultProps = defaultProps;

export default Testimonials;