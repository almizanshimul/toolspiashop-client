import React from "react";
import { useForm } from "react-hook-form";

const ContactUs = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const handleAddProduct = async (data) => {
    console.log(data);
  }
  return (
    <div className="bg-[url('https://i.ibb.co/Ybk71qf/background.jpg')] bg-cover">
      <div className="py-10 bg-[#0000009c] ">
        <h2 className="text-5xl font-bold py-6 text-white text-center">Contact <span className="text-primary">Us</span></h2>
        <div className="grid grid-cols-2 gap-3 items-center">
          <div className="">
            <form autoComplete="off" className="w-3/4 mx-auto" onSubmit={handleSubmit(handleAddProduct)}>
              <input placeholder="Name" type="text" className="input w-full block mb-3" {...register("name", {
                required: {
                  value: true,
                  message: "Name is Required",
                },
              })}
              />
              <input placeholder="Email" type="email" className="input w-full block mb-3" {...register("email", {
                required: {
                  value: true,
                  message: "Email is Required",
                },
              })}
              />
              <textarea placeholder="Message" type="text" className="input w-full block mb-3" {...register("message", {
                required: {
                  value: true,
                  message: "Message is Required",
                },
              })}
              />
              <input type="submit" className="btn block w-full btn-primary text-white" value="Send Message" />
            </form>
          </div>
          <div className="">
            <figure><img className="" src="https://i.ibb.co/WxGjBgC/contactus.png" alt="google map" /></figure>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
