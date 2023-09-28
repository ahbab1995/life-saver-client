import React from "react";
import banner from "../../assets/pexels.png.jpg";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

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
            <div className="card w-96 bg-base-100 shadow-xl">
              <figure className="px-10 pt-10">
                <img src={banner} alt="Shoes" className="rounded-xl" />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">{product.name}</h2>
                <p> {}</p>
                <div className="card-actions justify-start">
                  <button className="btn btn-primary">Add to Card <FontAwesomeIcon className="w-5" icon={faCartShopping} /></button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Landing;
