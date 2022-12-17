import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import axiosPrivate from "../../api/axiosPrivate";
import Loading from "../../components/Loading";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(
  "pk_test_51Lvk3hDLbXffjKyd9u4qbI5kD5PCmKTY4dXhZknIJzVunP4FqIz2gm5pNbKq3ocSHVpBnudnhaIc0dxHvyrfA4v200hsWLNT7w"
);

const Payment = () => {
  const { id } = useParams();
  const { data: order, isLoading } = useQuery("payment", () =>
    axiosPrivate
      .get(`https://toolspiashop-server.onrender.com/orderById/${id}`)
      .then((res) => res.data)
  );
  if (isLoading) {
    return <Loading></Loading>;
  }
  const { name, price, quantity, description, unit } = order;
  return (
    <div className="flex min-h-screen items-center justify-center gap-5">
      <div className="card w-96 bg-base-200 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{description}</p>
          <p>Quantity: {quantity}{unit}</p>
          <p>
            Price: {price}/{unit}
          </p>
          <p>To Pay: {price * quantity}</p>
        </div>
      </div>
      <div className="card mt-4 w-96 bg-base-200 shadow-xl">
        <div className="card-body">
          <Elements stripe={stripePromise}>
            <CheckoutForm order={order} />
          </Elements>
        </div>
      </div>
    </div>
  );
};

export default Payment;
