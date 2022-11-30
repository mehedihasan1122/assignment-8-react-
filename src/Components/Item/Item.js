import './Item.css'

import React from 'react';

const Item = (props) => {

    const {picture, age, workouttime, name} = props.item

    console.log(props);

   
    return (
       
         <div className='item-container'>
           
           <img src={picture} alt="" />
           <h5>Name: {name}</h5>
           <p>Age: {age}</p>
           <p>Workout Time: {workouttime}</p>
           <button onClick={()=>props.handleAddToCart(props.item)} > Add to cart</button>
       </div>
       
    );
};

export default Item;