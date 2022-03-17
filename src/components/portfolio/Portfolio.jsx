import React, { useState, useEffect } from 'react';

import './portfolio.scss';
import PortfolioList from '../porfolioList/PortfolioList.jsx';
import { projects, personalWorks, javascriptGames } from '../../data';

const Portfolio = () => {

    const [selected, setSelected] = useState("projects")
    const [data, setData] = useState([]);
    const list = [
        {
            id: "projects",
            title: "Projects"
        },
        {
            id: "personalWorks",
            title: "Personal Works"
        },
        {
            id: "funWithJavascript",
            title: "Fun With Javascript"
        }
    ]

    useEffect(() => {
        switch (selected) {
            case 'projects':
                setData(projects);
                break;
            case 'personalWorks':
                setData(personalWorks);
                break;
            case 'funWithJavascript':
                setData(javascriptGames);
                break;
            default:
                setData(projects);

        }
    }, [selected])

    return (<div className='portfolio' id='portfolio'>
        <h1>Portfolio</h1>
        <ul>
            {list.map((listItem, index) => <PortfolioList key={index} index={index} list={listItem} active={selected === listItem.id} setSelected={setSelected} />)}
        </ul>
        <div className="container">
            {data.map((item, index) =>
            (<div className="item" key={index}>
                <img src={`assets/${item.img}`} alt="" />
                <h3>{item.title}</h3>
            </div>))}
        </div>
    </div>);
}

export default Portfolio;