import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { CartState } from "../../hooks/context/Context";
const SingleProduct = ({ product }) => {
  const {
    state: { card },
    dispatch,
  } = CartState();
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure className="px-8 pt-10">
        <img src={product.img} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{product.name}</h2>

        <p> TK {product.price}</p>
        <div className="card-actions justify-start ">
          {card?.some((p) => p._id === product._id) ? (
            <Link
              className="btn btn-error"
              onClick={() =>
                dispatch({
                  type: "REMOVE_FROM_CART",
                  payload: product,
                })
              }
            >
              Remove from Cart
            </Link>
          ) : (
            <Link
              className="btn btn-primary btn-sm"
              onClick={() =>
                dispatch({
                  type: "ADD_TO_CART",
                  payload: product,
                })
              }
            >
              <FontAwesomeIcon className="w-5" icon={faCartShopping} />
              Add to Cart
            </Link>
          )}
        </div>

        <button product={product}>
        <Link to="/payment" className="btn btn-primary btn-sm ">
          Buy Now
        </Link>
        </button> 
      </div>
    </div>
  );
};

export default SingleProduct;
