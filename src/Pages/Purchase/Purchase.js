import axios from "axios";
import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Loading from "../../components/Loading";
import auth from "../../firebase.init";
import PurchaseForm from "./PurchaseForm";

const Purchase = () => {
  const { id } = useParams();
  const [user, loading, error] = useAuthState(auth);
  const {
    data: tool,
    isLoading,
  } = useQuery("tool", () =>
    axios.get(`https://toolspiashop-server.onrender.com/tools/${id}`).then((res) => res.data)
  );
  if (isLoading) {
    return <Loading></Loading>;
  }
  const { name, img, moq, availableQuantity, description, price, unit } = tool;
  return (
    <div>
      <div className="min-h-screen flex items-center justify-center bg-secondary">
        <div className="container mx-auto">
          <div className="card mx-auto p-10 mt-24 mb-12 w-3/4 card-side bg-base-100 shadow-xl">
            <figure className="w-2/4">
              <img
                src={img}
                className="w-full h-auto object-cover"
                alt={name}
              />
            </figure>
            <div className="w-2/4 my-auto ml-5">
              <h2 className="text-3xl font-bold">{name}</h2>
              <p className="w-3/4 mb-1">{description}</p>
              <p className="mb-1">
                Price: <span className="text-primary">{price}</span>/{unit}
              </p>
              <p className="mb-1">
                Availability:{" "}
                {availableQuantity > 0 ? (
                  <span className="text-green-500">Available</span>
                ) : (
                  <span className="text-red-500">Out of stock</span>
                )}
              </p>
              <p className="mb-1">
                Minimum Order Quantity:{" "}
                <span className="text-primary">{moq}</span>
                {unit}
              </p>
              <p className="mb-1">
                Available quantity:{" "}
                <span className="text-primary">{availableQuantity}</span>
                {unit}
              </p>
            </div>
          </div>
        </div>
      </div>
      <PurchaseForm user={user} tool={tool}></PurchaseForm>
    </div>
  );
};

export default Purchase;
