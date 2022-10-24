import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axiosPrivate from "../../api/axiosPrivate";

const PurchaseForm = ({ user, tool }) => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const handlePurchase = (data) => {
    const { _id, img, name, description, price, unit, availableQuantity, moq } = tool;
    const { email, userName, address, phone, quantity } = data;
    const order = {
      toolId: _id,
      name,
      img,
      description,
      price,
      unit,
      quantity: parseInt(quantity),
      userName,
      address,
      phone,
      email,
      isPaid: false,
      transactionId: '',
      status: 'pending'
    };
    axiosPrivate.post(`https://toolspiashop.herokuapp.com/order?toolId=${_id}&newQuantity=${availableQuantity - quantity}`, order).then((res) => {
      if (res.data.acknowledged === true) {
        toast.success("Order placed successfully", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
        navigate("/");
      }
    });
  };
  const [quantityError, setQuantityError] = useState('');


  const [quantity, setQuantity] = useState(tool.moq);
  useEffect(() => {
    setQuantity('');
    setQuantity(tool.moq);
  }, [tool.moq])


  const handleQuantity = (event) => {
    const { moq, unit, availableQuantity } = tool;
    if (parseInt(event.target.value) < moq) {
      setQuantityError(`At least ${moq}${unit} can be purchased`);
      setQuantity(parseInt(event.target.value));
    } else if (parseInt(event.target.value) > availableQuantity) {
      setQuantityError(`Out of stock! You can order ${availableQuantity}${unit}`)
      setQuantity(parseInt(event.target.value));
    } else {
      setQuantity(parseInt(event.target.value));
      setQuantityError('');
    }
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit(handlePurchase)}
        className="w-3/4 mx-auto bg-secondary my-10 rounded-2xl p-12"
      >
        <h3 className="text-4xl mb-4 text-center text-primary font-bold">
          Purchase
        </h3>
        <label className="text-center block mb-2 font-bold" htmlFor="quantity">
          Quantity
        </label>
        <div className="flex justify-center">
          <input
            id="quantity"
            type="number"
            value={quantity}
            {...register("quantity", {
              required: true,
            })}
            onChange={(event) => handleQuantity(event)}
            className="bg-white rounded-none input input-bordered w-1/6 text-center mb-3"
          />
        </div>
        <label>
          {errors?.quantity?.type === "required" && (
            <span className="text-red-500">{errors?.quantity?.message}</span>
          )}
        </label>
        <label className="text-red-500 text-center block">
          {quantityError}
        </label>
        <input
          placeholder="Your Name"
          {...register("userName")}
          value={user.displayName}
          readOnly
          className="bg-white block input input-bordered w-full mb-3"
        />
        <input
          placeholder="Your Email"
          {...register("email")}
          value={user.email}
          readOnly
          className="bg-white block input input-bordered w-full mb-3"
        />
        <input
          placeholder="Your Address"
          {...register("address", {
            required: {
              value: true,
              message: "Address is required",
            },
          })}
          className="bg-white block input input-bordered w-full mb-3"
        />
        <label>
          {errors?.address?.type === "required" && (
            <span className="text-red-500">{errors?.address?.message}</span>
          )}
        </label>
        <input
          placeholder="Your Phone Number"
          {...register("phone", {
            required: {
              value: true,
              message: "Phone Number is required",
            },
          })}
          type="number"
          className="bg-white block input input-bordered w-full mb-3"
        />
        <label>
          {errors?.phone?.type === "required" && (
            <span className="text-red-500">{errors?.phone?.message}</span>
          )}
        </label>
        <input disabled={quantityError && true} type="submit" className="btn btn-primary w-full" />
      </form>
    </div>
  );
};

export default PurchaseForm;
