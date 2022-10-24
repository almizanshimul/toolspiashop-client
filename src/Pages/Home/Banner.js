import React from "react";

const Banner = () => {
  return (
    <div
      className="bg-no-repeat bg-cover bg-center home-banner flex justify-center items-center bg-[url('https://i.ibb.co/Ybk71qf/background.jpg')]"
    >
      <div className="hero text-white min-h-screen bg-[#0000009c]">
        <div className="hero-content lg:flex-row-reverse items-center">
          <img
            data-aos="fade-left"
            data-aos-delay="fade-right"
            data-aos-duration="800"
            data-aos-once="true"
            src='https://i.ibb.co/DDJNR4w/6384108d8a7cf901b8b68edd7105c4c7.jpg'
            style={{ width: "500px" }}
            className="max-w-full h-auto rounded-lg shadow-2xl"
            alt="hero"
          />
          <div>
            <h1
              className="text-4xl font-bold lg:leading-3"
              data-aos="fade-right"
              data-aos-once="true"
              data-aos-delay="200"
              data-aos-duration="800"
            >
              The Machinery Master -{" "}
              <span className="text-primary">ToolsPiaShop</span>
            </h1>
            <p
              className="py-6 lg:w-3/5"
              data-aos="fade-right"
              data-aos-delay="400"
              data-aos-duration="700"
              data-aos-once="true"
            >
              s We are the most leading machinery manufacturer in the world.
              When we started, we dreamt about to make our industry the most
              trusted industry ever. We are on the way!
            </p>
            <button
              data-aos="fade-right"
              data-aos-delay="600"
              data-aos-once="true"
              data-aos-duration="600"
              className="btn btn-primary"
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
