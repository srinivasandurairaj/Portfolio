import React, { useEffect, useRef } from 'react';
import './intro.scss'

import { init } from 'ityped';

const propTypes = {};

const defaultProps = {};

const Intro = () => {

    const textRef = useRef();

    useEffect(() => {
        init(textRef.current, { showCursor: true, backDelay: 1500, strings: ['Javascript Developer'] })
    }, [])
    return (
        <div className='intro' id="intro">
            <div className="left">
                <div className="imgContainer">
                    <img src="assets/srini.png" alt="" />
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hi There, I'm</h2>
                    <h1>Srinivasan Durairaj</h1>
                    <h3>Fullstack <span ref={textRef}></span></h3>
                </div>
                <a href="#portfolio">
                    <img src="assets/down.png" alt="" />
                </a>
            </div>
        </div>);
}

Intro.propTypes = propTypes;
Intro.defaultProps = defaultProps;

export default Intro;