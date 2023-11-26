import React, { useEffect, useState } from "react";
import auth from "../../firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";
import { CartState } from "../../hooks/context/Context";
import Loading from "../Shared/Loading";
import { useQuery } from "react-query";


const Payment = ({product}) => {
  const [user] = useAuthState(auth);


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

  const { data: manageProducts, isLoading, refetch } = useQuery('product', () => fetch('http://localhost:5000/addproduct', {
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));

    if (isLoading) {
        return <Loading></Loading>
  }
  console.log(product)

 

  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">Payment : {total}</div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="name"
                  placeholder="name"
                  disabled
                  value={user?.displayName || ""}
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  disabled
                  value={user?.email || ""}
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Addres</span>
                </label>
                <input
                  type="text"
                  placeholder="addres"
                  className="input input-bordered"
                  required
                />
              </div>

              <div className="form-control mt-6">
                <button className="btn btn-primary">payment now </button>
              </div>
            </form>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
