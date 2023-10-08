import React, { useEffect, useState } from "react";


import SingleProduct from "./Shared/SingleProduct";
const Allproduct = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/product")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div>
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

export default Allproduct;
