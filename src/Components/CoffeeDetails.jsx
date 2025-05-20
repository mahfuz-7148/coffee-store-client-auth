import React from 'react';
import {useLoaderData} from 'react-router';

const CoffeeDetails = () => {
    const data = useLoaderData()
    console.log(data)
    const { name, price, quantity, photo} = data

    return (
        <div>
            <p>Name {name}</p>
            <p>Price {price}</p>
            <p>Quantity {quantity}</p>
            <img className='w-44' src={photo} alt="" />
        </div>
    );
};

export default CoffeeDetails;