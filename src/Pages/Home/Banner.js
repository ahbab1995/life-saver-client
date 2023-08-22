import React from 'react';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div className="hero min-h-screen" style={{backgroundImage: 'url(https://images.pexels.com/photos/38296/cycling-bicycle-riding-sport-38296.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)'}}>
        <div className="hero-overlay bg-opacity-6"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">We save your day on the ride</h1>
            <p className="mb-5 text-xl">Our modular product line lets you combine the best bike repair tools of your choice for every adventure</p>
            <Link  to='/allproduct' className="btn btn-primary">GO TO SHOP </Link>
          </div>
        </div>
      </div>
    );
};

export default Banner;