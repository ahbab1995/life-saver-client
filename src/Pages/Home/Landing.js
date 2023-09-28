import React from "react";

import { useEffect, useState } from "react";

import SingleProduct from "../Shared/SingleProduct";

const Landing = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div>
      <h1 className="lg:text-5xl text-3xl my-16 text-center">
        Combinations for your adventures
      </h1>
      <div>
        <div className="justify-items-center grid gap-5 grid-cols-1  md:grid-cols-2 lg:grid-cols-3 ">
          {products.map((product) => (
            <SingleProduct product={product}></SingleProduct>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Landing;
