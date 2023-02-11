import React, { useContext } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { useSelector } from "react-redux";
import { userSelector } from "../../store/user/user-selector";
import { Context as ProductContext } from "../../Context/ProductContext";

function StripePayment() {
  const { totalPrice } = useContext(ProductContext);
  const currentUser = useSelector(userSelector);
  const stripe = useStripe();
  const elements = useElements();

  const paymentHandler = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const response = await fetch("/.netlify/functions/create-payment-intents", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ amount: totalPrice * 100 }),
    }).then((resp) => resp.json());

    // console.log(response)

    const { client_secret } = response.paymentIntent;

    // console.log(client_secret)

    const paymentResult = await stripe.confirmCardPayment(client_secret, {
      payment_method: {
        card: elements.getElement(CardElement),
        billing_details: {
          name: currentUser.displayName,
        },
      },
    });

    if (paymentResult.error) {
      alert(paymentResult.error);
    } else {
      if (paymentResult.paymentIntent.status === "succeeded") {
        alert("payment successful 😃");
      }
    }
  };

  return (
    <div>
      <form className="mt-20 w-[500px] mx-auto" onSubmit={paymentHandler}>
        <h2 className="text-center my-5 text-[2rem] font-bold">
          Credit-Card Payment
        </h2>
        <CardElement className="w-[80%] mx-auto" />
        <button className="bg-black w-1/2 text-white p-2 rounded-md mt-6 mx-auto block hover:bg-gray-700 hover:shadow-lg hover:text-white hover:scale-[0.95]">
          Pay Now
        </button>
      </form>
    </div>
  );
}

export default StripePayment;
