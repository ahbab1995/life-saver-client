import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { CartState } from "../../hooks/context/Context";

import { Link } from "react-router-dom";

const Card = () => {
  const {
    state: { card },
    dispatch,
  } = CartState();

  const [total, setTotal] = useState();

  useEffect(() => {
    setTotal(
      card.reduce((acc, curr) => acc + Number(curr.price) * curr.qty, 0)
    );
  }, [card]);

  return (
    <div className="overflow-x-auto pl-12 ">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>Image</th>
            <th>Product Name</th>
           
            <th></th>
            <th>Product Price</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          {card.map((product) => (
            <tr>
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className=" w-20 h-20">
                      <img src={product.img} alt="Avatar Tailwind CSS Component" />
                    </div>
                  </div>
                </div>
              </td>
              <td>
                <h4>{product.name}</h4>
              </td>
              <td>
                <select className="select select-bordered select-sm  ">
                  <option disabled selected  value={product.qty}
                    onChange={(e) =>
                      dispatch({
                        type: "CHANGE_CART_QTY",
                        payload: {
                          id: product.id,
                          qty: e.target.value,
                        },
                      })
                    }>
                   
                  </option>
                 
                </select>
              </td>
              <td>{product.price}</td>
              <th>
                <button className="btn btn-ghost btn-sm w-10 caret-lime-500"   onClick={() =>
                      dispatch({
                        type: "REMOVE_FROM_CART",
                        payload: product,
                      })
                    }>
                  <FontAwesomeIcon icon={faTrash} size="2xl" />
                </button>
               
              </th>
            </tr>
          ))}

          {/* row 2 */}

          {/* row 3 */}

          {/* row 4 */}
        </tbody>
        {/* foot */}
        <tfoot>
          <tr>
            
          </tr>
        </tfoot>
      </table>
      <div><h4 className="font-bold mt-5">Total: TK {total}</h4></div>
        
      <Link to="/payment" type="button" className="btn btn-primary mt-3" disabled={card.length === 0}>
          Checkout
        </Link>
    </div>
  );
};

export default Card;
