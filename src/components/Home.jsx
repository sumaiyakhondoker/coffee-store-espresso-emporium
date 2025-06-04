import React from 'react';
import Banner from './Banner';
import PopularProducts from './PopularProducts';
import CoffeeCards from './CoffeeCards';
import Login from './Login';
import Register from './Register';

const Home = () => {
    return (
        <div>
            {/* <Login></Login> */}
            {/* <Register></Register> */}
            <Banner></Banner>
            <PopularProducts></PopularProducts>
            <CoffeeCards></CoffeeCards>

        </div>
    );
};

export default Home;