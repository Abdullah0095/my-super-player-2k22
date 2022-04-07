import React from 'react';

const Cart = (props) => {
    return (
        <div>
            <h1>Order Summary: {props.cart.length}</h1>
        </div>
    );
};

export default Cart;