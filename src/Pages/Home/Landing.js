import React from "react";
import banner from "../../assets/pexels.png.jpg";
import { Link } from "react-router-dom";
import { useEffect,useState } from "react";


const Landing = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data));
}, [])
  return (
    <div>
      <h1 className="lg:text-5xl text-3xl my-16 text-center">
        Combinations for your adventures
      </h1>
      {products.map(product=>
      <div className="hero  ">
        <div className="hero-content flex-col lg:flex-row">
          <img src={banner} className=" rounded-lg " alt="banner"/>
          <div>
            <h1 className="text-5xl ">{product.name}</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <Link to='/allproduct' className="btn btn-primary">GO TO SHOP</Link>
          </div>
        </div>
      </div>
      )}
      <div className="hero  ">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={banner} className=" rounded-lg " alt="banner"/>
          <div>
            <h1 className="text-5xl ">Box Office News!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary">GO TO SHOP</button>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Landing;
