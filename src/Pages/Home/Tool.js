import React from "react";
import { useNavigate } from "react-router-dom";
import "./Tool.css";

const Tool = ({ tool }) => {
  const { _id, name, img, description, price, moq, availableQuantity, unit } = tool;
  const navigate = useNavigate();
  return (
    <div className="card duration-300 cursor-pointer tool-card card-compact bg-base-100 shadow-xl p-5">
      <figure>
        <div className="overflow-hidden w-full rounded-2xl bg-gray-200">
          <img
            className="max-w-full mx-auto duration-300 h-auto rounded-2xl"
            src={img}
            alt={name}
          />
        </div>
      </figure>
      <div className="card-body gap-1">
        <h2 className="card-title">{name}</h2>
        <p>{description}</p>
        <p>
          Price: $
          <span className="text-primary">
            {price}/{unit}
          </span>
        </p>
        <p>Minimum Order Quantity: {moq}</p>
        <p>
          Available Quantity: {availableQuantity}
          {unit}
        </p>
        <div className="card-actions justify-end">
          <button onClick={() => navigate(`/purchase/${_id}`)} className="btn d-block w-full btn-primary text-white">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Tool;
