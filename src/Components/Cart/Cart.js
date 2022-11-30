import React from 'react';
import './Cart.css'
import Cartinformation from './Cartinformation';

const Cart = (props) => {

    const {breaktime} = props.item
    console.log(props)

    


    return (
        <div className='cart-items'>

                <button onClick={()=>props.handleAddToCart(props.item)} className='breaktime-btn'>{breaktime}s</button>
            
        </div>
    );
};

export default Cart;