import axios from "axios";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import Review from "./Review";
import './Review.css';

const Reviews = () => {
  const settings = {
    dots: false,
    infinite: false,
    centerPadding: "60px",
    className: "center",
    speed: 300,
    autoplay: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    pauseOnHover: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false,
        },
      },
    ],
  };
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    axios.get("https://toolspiashop-server.onrender.com/reviews").then((res) => {
      setReviews(res.data);
    });
  }, []);
  return (
    <div className="my-20">
      <h2 className="text-center text-5xl font-bold mt-8 mb-16">
        Customer <span className="text-primary">Reviews</span>
      </h2>
      <div className="container mx-auto px-12">
        <Slider {...settings}>
          {reviews.map((review) => (
            <Review key={review._id} review={review}></Review>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Reviews;