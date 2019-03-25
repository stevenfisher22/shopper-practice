// React Elements
import React from 'react';
import PropTypes from 'prop-types';

// Components and Other Imports
import Item from './Item';

// CSS
import './item-page.css';

function ItemPage({items, onAddToCart}) {
    return (
        <ul className="item-page-items">
            {items.map(item => 
                <li key={item.id} className="item-page-item">
                    <Item 
                        item={item}
                        onAddToCart={() => onAddToCart(item)}
                    />
                </li>
            )}
        </ul>
    );
}
ItemPage.propTypes = {
    items: PropTypes.array.isRequired,
    onAddToCart: PropTypes.func.isRequired
};

export default ItemPage