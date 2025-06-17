import React, { useContext } from 'react';
import Banner from './Banner';
import PopularProducts from './PopularProducts';
import CoffeeCards from './CoffeeCards';
import Login from './Login';
import Register from './Register';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';

const Home = () => {
     const {setCoffees} = useContext(AuthContext)
    const loadedCoffees = useLoaderData()
   setCoffees(loadedCoffees)
    return (
        <div>
            {/* <Login></Login>
            <Register></Register> */}
            <Banner></Banner>
            <PopularProducts></PopularProducts>
            <CoffeeCards></CoffeeCards>

        </div>
    );
};

export default Home;