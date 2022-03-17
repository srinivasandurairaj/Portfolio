import React from 'react';

const PortfolioList = ({ index, list, active, setSelected }) => {
    return (
        <li key={list.id} onClick={() => setSelected(list.id)} className={active ? 'portfolioList active' : 'portfolioList'}>
            {list.title}
        </li>
    );
}

export default PortfolioList;