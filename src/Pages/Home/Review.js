import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Rating from "react-rating";
import "./Review.css";

const Review = ({ review }) => {
  const { name, description, rating } = review;
  return (
    <div className={`review-card flex items-center justify-center shadow-md my-5 bg-gray-50`}>
      <div>
        <h4 className="text-2xl mb-2">{name}</h4>
        <p><small>{description}</small></p>
        {/* rating by react rating */}
        <Rating
          initialRating={rating}
          emptySymbol={
            <FontAwesomeIcon className="text-[#c9c9c9]" icon={faStar} />
          }
          fullSymbol={
            <FontAwesomeIcon className="text-[#F2B236]" icon={faStar} />
          }
          readonly
        />
      </div>
    </div>
  );
};

export default Review;
