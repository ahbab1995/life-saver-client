import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { CartState } from "../../hooks/context/Context";
import banner from "../../assets/pexels.png.jpg";

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
            <th>Name</th>
            <th>Job</th>
            <th>Favorite Color</th>
            <th></th>
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
                      <img src={banner} alt="Avatar Tailwind CSS Component" />
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
            <th></th>
            <th>Name</th>
          
           
            <th></th>
          </tr>
        </tfoot>
      </table>
      <div><h4>Total: TK {total}</h4></div>
      <button type="button" className="btn btn-primary mt-3" disabled={card.length === 0}>
          Proceed to Checkout
        </button>
    </div>
  );
};

export default Card;
