import React from 'react';
import {Link} from 'react-router';
import Swal from 'sweetalert2';

const CoffeeCard = ({coffee, coffees, setCoffees}) => {
    const {_id, name, price, quantity, photo} = coffee

    const itemDelete = id => {
        // console.log(id)
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`http://localhost:3000/coffees/${_id}`, {
                    method: 'DELETE'
                }).then(res => res.json())
                    .then(data => {
                        if (data.deletedCount) {

                        Swal.fire({
                            title: "Deleted!",
                            text: "Your file has been deleted.",
                            icon: "success"
                        });

                        const filterCoffees = coffees.filter(coffeee => coffeee._id !== id)
                            setCoffees(filterCoffees)
                        }
                    })

            }
        });

    }
    return (
        <div className="card card-side bg-base-100 shadow-sm border-2">
            <figure>
                <img className='w-44'
                    src={photo}
                    alt="Movie" />
            </figure>
            <div className="flex mt-8 w-full justify-around">
                <div>
                    <h2 className="">{name}</h2>
                    <p>Price: {price}</p>
                    <p>Quantity: {quantity}</p>
                </div>
                <div className="card-actions justify-end">
                    <div className='join join-vertical space-y-2'>
                        <Link to={`/coffee/${_id}`}>View</Link>
                        <Link to={``}>Edit</Link>
                        <button onClick={() => itemDelete(_id)}>Delete</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;