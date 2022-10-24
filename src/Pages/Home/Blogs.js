import React from "react";

const Blogs = () => {
  return (
    <div className="container mx-auto py-20">
      <h2 className="text-center text-5xl font-bold pb-10">Blogs</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-10">
        <div className="card bg-base-100 shadow-xl">
          <figure><img src="https://i.ibb.co/DDJNR4w/6384108d8a7cf901b8b68edd7105c4c7.jpg" alt="Shoes" /></figure>
          <div className="card-body">
            <h2 className="card-title">The Machinery Master - ToolsPiaShop</h2>
            <p>We are the most leading machinery manufacturer in the world. When we started, we dreamt about to make our industry the most trusted industry ever. We are on the way!</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary"> Read More</button>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 shadow-xl">
          <figure><img src="https://i.ibb.co/DDJNR4w/6384108d8a7cf901b8b68edd7105c4c7.jpg" alt="Shoes" /></figure>
          <div className="card-body">
            <h2 className="card-title">The Machinery Master - ToolsPiaShop</h2>
            <p>We are the most leading machinery manufacturer in the world. When we started, we dreamt about to make our industry the most trusted industry ever. We are on the way!</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary"> Read More</button>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 shadow-xl">
          <figure><img src="https://i.ibb.co/DDJNR4w/6384108d8a7cf901b8b68edd7105c4c7.jpg" alt="Shoes" /></figure>
          <div className="card-body">
            <h2 className="card-title">The Machinery Master - ToolsPiaShop</h2>
            <p>We are the most leading machinery manufacturer in the world. When we started, we dreamt about to make our industry the most trusted industry ever. We are on the way!</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary"> Read More</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
