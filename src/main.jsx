import { createRoot } from 'react-dom/client'
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router";
import './index.css'
import Root from './Layouts/Root.jsx';
import Home from './Pages/Home.jsx';
import AddCoffee from './Components/AddCoffee.jsx';
import CoffeeDetails from './Components/CoffeeDetails.jsx';

const router = createBrowserRouter([
    {
        path: "/",
        Component: Root,
        children: [
            {
                index: true,
                loader: () => fetch('http://localhost:3000/coffees'),
                Component: Home
            },
            {
                path: '/addcoffee',
                Component: AddCoffee
            },
            {
                path: '/coffee/:id',
                loader: ({params}) => fetch(`http://localhost:3000/coffees/${params.id}`),
                Component: CoffeeDetails
            }
        ]
    },
]);

createRoot(document.getElementById('root')).render(

    <RouterProvider router={router} />
  
)
