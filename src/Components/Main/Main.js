import './Main.css'

import React, { useEffect, useState } from 'react';
import Item from '../Item/Item';
import Cart from '../Cart/Cart';
import Cartinformation from '../Cart/Cartinformation';

const Main = () => {

    const [items , setItems] = useState([]);

    const [cart ,setCart] =useState([]);

    // const [breaktime , setBreakTime] = useState([]);

    useEffect(()=>{
        fetch('fakedata.json')
        .then(res => res.json())
        .then(data => setItems(data))
    },[])



    const handleAddToCart = (item)=>{
    //    console.log('clicked');
       const newCart = [...cart, item];
       setCart(newCart)
    }

    // const handlerBreakTime = (item) =>{
    //     const breakTimeCart = [...breaktime , item];
    //     setBreakTime(breakTimeCart)
    // }


    return (
        <div className='main-container'>
            
            <div className='items-main'>


                {
                    items.map(item => 
                    <Item 
                    item = {item}
                    handleAddToCart = {handleAddToCart}
                    ></Item> )
                }

            </div>

            <div className='cart-main' >

             <Cartinformation  
                    cart = {cart}
                    ></Cartinformation>

             {
                items.map(item => <Cart key={item.id} 
                    handleAddToCart = {handleAddToCart}
                    item = {item} ></Cart>)
             }

             

             



             <button className='btn-activity'>Activity Completed</button>

            </div>
        </div>
    );
};

export default Main;