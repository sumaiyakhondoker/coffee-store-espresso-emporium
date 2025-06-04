import React from 'react';
import Banner from './Banner';
import PopularProducts from './PopularProducts';
import CoffeeCards from './CoffeeCards';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <PopularProducts></PopularProducts>
            <CoffeeCards></CoffeeCards>
        </div>
    );
};

export default Home;