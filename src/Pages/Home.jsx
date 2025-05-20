import React, {useState} from 'react';
import {useLoaderData} from 'react-router';
import CoffeeCard from '../Components/CoffeeCard.jsx';

const Home = () => {
    const data = useLoaderData()
    const [coffees, setCoffees] = useState(data)
    console.log(data)

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
            {
                coffees.map(coffee =>
                <CoffeeCard
                 key={coffee._id}
                 coffee={coffee}
                 coffees={coffees}
                 setCoffees={setCoffees}
                />
                )
            }
        </div>
    );
};

export default Home;