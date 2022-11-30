import React from 'react';
import './Cartinformation.css'

const Cartinformation = (props) => {

    const {cart} = props;
  


    let workoutTime = 0;
   
    for(const workouttime of cart ){
       
     workoutTime = workoutTime + workouttime.workouttime;
     
    }

    let breakTime = 0;
    for(const breaktime of cart){
        breakTime =  breaktime.breaktime;
    }
    
    return (
        <div>
                <div>
                    <img src="" alt="" />
                    <h1> MEHEDI HASAN</h1>
                </div>

                <div className='info'>
                    <div>
                        <h6>75 <small>kg</small></h6>
                        <p>Weight</p>
                    </div>
                    <div>
                        <h6>5.4 </h6>
                        <p>Height</p>
                    </div>
                    <div>
                        <h6>24 <small>yrs</small></h6>
                        <p>Age</p>
                    </div>

                </div>



                <h2>Exercise Details </h2>
             <div>
                <h3>Exercise Time:</h3>
                <p>{workoutTime}</p>
             </div>
             <div> 
                <h3>Break Time: {breakTime}</h3>
                <p></p>
             </div>


        </div>
    );
};

export default Cartinformation;