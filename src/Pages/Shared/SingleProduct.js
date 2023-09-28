import React from 'react';
import banner from "../../assets/pexels.png.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
const SingleProduct = ({product}) => {
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
              <figure className="px-10 pt-10">
                <img src={banner} alt="Shoes" className="rounded-xl" />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">{product.name}</h2>
                <p> {}</p>
                <div className="card-actions justify-start">
                  <Link  className="btn btn-primary">
                    Add to Card{" "}
                    <FontAwesomeIcon className="w-5" icon={faCartShopping} />
                  </Link>
                </div>
              </div>
            </div>
    );
};

export default SingleProduct;