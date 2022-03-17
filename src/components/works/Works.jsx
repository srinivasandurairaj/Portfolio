import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './works.scss';
import { works } from '../../data'

const propTypes = {};

const defaultProps = {};

const Works = () => {

    const [ currentSlide, setCurrentSlide ] = useState(0)

    const handleClick = (direction) => {
        direction === 'left' ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2 ) : 
        setCurrentSlide(currentSlide < works.length - 1 ? currentSlide + 1 : 0 )
    }

    return (<div className='works' id='works'>
        <div className="slider" style={{transform: `translateX(-${currentSlide * 100}vw)`}}>
            {works.map ((data) => (<div className="container" key={data.id}>
                <div className="item">
                    <div className="left">
                        <div className="leftContainer">
                            <div className="imgContainer">
                                <img src={`assets/${data.icon}`} alt="" />
                            </div>
                            <h2>{data.title}</h2>
                            <p>{data.desc}</p>
                            <span>{data.project}</span>
                        </div>
                    </div>
                    <div className="right">
                        <img src={`assets/${data.img}`} alt="" />
                    </div>
                </div>
            </div>))}
        </div>
        <img src="assets/arrow.png" className='arrow left' alt="" onClick={ () => handleClick("left")}/>
        <img src="assets/arrow.png" className='arrow right' alt="" onClick={ () => handleClick("right")}/>
    </div>); 
}

Works.propTypes = propTypes;
Works.defaultProps = defaultProps;
// #endregion

export default Works;