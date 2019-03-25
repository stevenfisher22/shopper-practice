// React Elements
import React from 'react';
import PropTypes from 'prop-types';

// Components and Other Imports

// CSS
import './item-page.css';

function ItemPage({items}) {
    return (
        <ul className="item-page-items">
            {items.map(item => 
                <li key={item.id} className="item-page-item">
                    {item.name}
                </li>
            )}
        </ul>
    );
}
ItemPage.propTypes = {
    items: PropTypes.array.isRequired
};

export default ItemPage