import React, { useEffect, useState } from "react";

import { CartState } from "../../hooks/context/Context";
import Loading from "../Shared/Loading";
import { useQuery } from "react-query";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";
import Footer from "../Shared/Footer";

const stripePromise = loadStripe(
  "pk_test_51OGnsHJMLcFNaSxTZ5X3XJbg64HGRT4rB5uzPUPDV1g5KRNLLBLjqAZYmSwHpPLb4gOpvb3rsZ4hdtSnbdRyhpc100eIfhpcEx"
);

const Payment = () => {

  const {
    state: { card },
  } = CartState();

  const [total, setTotal] = useState();

  useEffect(() => {
    setTotal(
      card.reduce((acc, curr) => acc + Number(curr.price) * curr.qty, 0)
    );
  }, [card]);

  const {
    data: manageProducts,
    isLoading,
  
  } = useQuery("product", () =>
    fetch("http://localhost:5000/addproduct", {
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">Payment : {total} TK </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <Elements stripe={stripePromise}>
              <CheckoutForm></CheckoutForm>
            </Elements>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Payment;
