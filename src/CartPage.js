// React Elements 
import React from 'react';
import PropTypes from 'prop-types';

// Components
import Item from './Item';

// CSS
import "./cart-page.css";

function CartPage({items}) {
    return (
        <ul className="cart-page-items">
            {items.map(item =>
                <li key={item.id} className="cart-page-item">
                    <Item item={item}/>
                </li>
            )}
        </ul>
    );
}
CartPage.propTypes = {
    items: PropTypes.array.isRequired
};

export default CartPage