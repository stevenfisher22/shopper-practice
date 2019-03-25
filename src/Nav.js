import React from 'react';

const Nav = ({activeTab, onTabChange}) => (
    <nav className="app-nav">
        <ul>
            <li className={`app-nav-item ${activeTab === 0 && 'selected'}`}>
                <a onClick={() => onTabChange(0)} >Items</a>
            </li>
            <li className={`app-nav-item ${activeTab === 1 && 'selected'}`}>
                <a onClick={() => onTabChange(1)} >Cart</a>
            </li>
        </ul>
    </nav>
);

export default Nav