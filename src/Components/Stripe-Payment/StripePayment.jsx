import React from "react";
import { CardElement,useStripe,useElements } from "@stripe/react-stripe-js";

function StripePayment() {
    const stripe = useStripe()
    const elements = useElements()

    const paymentHandler = async (e) => {
        e.preventDefault()

        if(!stripe || !elements) {
            return
        }

    }

  return (
    <div>
      <form className="mt-20 w-[500px] mx-auto">
        <h2 className="text-center my-5 text-[2rem] font-bold">Credit-Card Payment</h2>
        <CardElement className="w-[80%] mx-auto" />
        <button className="bg-black w-1/2 text-white p-2 rounded-md mt-6 mx-auto block hover:bg-gray-700 hover:shadow-lg hover:text-white hover:scale-[0.95]">
          Pay Now
        </button>
      </form>
    </div>
  );
}

export default StripePayment;
