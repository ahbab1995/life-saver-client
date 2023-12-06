import React, { useEffect, useState } from "react";
import {
  CardElement,
 
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";

import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const CheckoutForm = () => {
    const [user] = useAuthState(auth);
    
  const [cardError, setCardError] = useState('');
  const [clientSecret, setClientSecret] = useState('');

  const stripe = useStripe();
  const elements = useElements();

  useEffect(() => {
    fetch('http://localhost:5000/create-payment-intent', {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        },
        body: JSON.stringify({ user })
    })
        .then(res => res.json())
        .then(data => {
            if (data?.clientSecret) {
                setClientSecret(data.clientSecret);
            }
        });

}, [])

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe) {
      return;
    }

    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
      }
      
      const { error, paymentMethod } = await stripe.createPaymentMethod({
        type: 'card',
        card
      });
      
      setCardError(error?.message || '')
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="card-body">
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

        <div className="form-control mt-5">
          <CardElement
            options={{
              style: {
                base: {
                  fontSize: "16px",
                  color: "#424770",
                  "::placeholder": {
                    color: "#aab7c4",
                  },
                },
                invalid: {
                  color: "#9e2146",
                },
              },
            }}
          />
        </div>

        <div className="form-control mt-6">
          <button className="btn btn-primary">payment now </button>
        </div>
          </form>
          {
               cardError && <p className='text-red-500 mr-5 p-5'>{cardError}</p>
          }
    </div>
  );
};

export default CheckoutForm;
