import React from 'react';

const Cart = ({cart}) => {
    console.log(cart)
    return (
        <div>
            {
                cart.map((data) => <h1>{data.strMeal}</h1>)
            }
        </div>
    );
};

export default Cart;