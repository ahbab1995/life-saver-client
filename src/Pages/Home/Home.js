import React from 'react';
import Banner from './Banner';
import Landing from './Landing';

import Incredible from './Incredible';
import Prosvideo from './Prosvideo';
import Footer from '../Shared/Footer';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Landing></Landing>
            <Incredible></Incredible>
            <Prosvideo></Prosvideo>
            <Footer></Footer>
        </div>
    );
};

export default Home;