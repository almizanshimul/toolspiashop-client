import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axiosPrivate from "../../api/axiosPrivate";
import auth from "../../firebase.init";

const AddReview = () => {
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const handleAddReview = (data) => {
    const { email, displayName } = user;
    const review = {
      email,
      name: displayName,
      ...data,
    };
    axiosPrivate.post("https://toolspiashop.herokuapp.com/reviews", review).then((res) => {
      if (res.data.acknowledged === true) {
        toast.success("Review Added Successfully", {
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
  return (
    <div className="h-full flex items-center justify-center">
      <div className="w-2/4 bg-secondary p-10 rounded-2xl">
        <div className="text-center mb-3">
          <Link to="/" className="normal-case font-lobster text-5xl">
            Tools<span className="text-primary font-lobster">PiaShop</span>
          </Link>
          <h3 className="text-3xl">Add Review</h3>
        </div>
        <form autoComplete="off" onSubmit={handleSubmit(handleAddReview)}>
          <input
            placeholder="Rating"
            className="input w-full block mb-3"
            type="number"
            {...register("rating", {
              min: {
                value: 1,
                message: "Please give a value greater than 1",
              },
              max: {
                value: 5,
                message: "Please give a value less than 5",
              },
              required: {
                value: true,
                message: "Rating is required",
              },
            })}
          />
          <label className="label pt-0 -mt-2 pb-3">
            <span className="label-text-alt text-red-500">
              {errors.rate?.type === "min" && errors.rate.message}
              {errors.rate?.type === "max" && errors.rate.message}
              {errors.rate?.type === "required" && errors.rate.message}
            </span>
          </label>
          <textarea
            placeholder="Description (Tell your opinion about us)"
            className="input w-full block mb-3 h-16"
            type="text"
            {...register("description", {
              required: {
                value: true,
                message: "Description is required",
              },
            })}
          />
          <label className="label pt-0 -mt-2 pb-3">
            <span className="label-text-alt text-red-500">
              {errors.description?.type === "required" &&
                errors.description.message}
            </span>
          </label>
          <input
            className="input w-full max-w-xs block mb-3"
            type="submit"
            className="btn block w-full btn-primary text-white"
            value="Add Review"
          />
        </form>
      </div>
    </div>
  );
};

export default AddReview;
