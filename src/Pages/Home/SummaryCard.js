import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import CountUp from "react-countup";
import ReactVisibilitySensor from "react-visibility-sensor";
import "./SummaryCard.css";

const SummaryCard = ({ summary }) => {
  const { icon, number, text, sideText } = summary;
  const [inViewport, setInViewport] = useState(false);
  const [active, setActive] = useState(true);
  return (
    <ReactVisibilitySensor
    offset={{top: 300}}
      onChange={() => setInViewport(!inViewport)}
    >
      <div className="text-center summary-card shadow-lg hover:shadow-xl py-6 rounded-md cursor-pointer bg-white hover:bg-primary duration-500 hover:text-white">
        <FontAwesomeIcon
          className="text-6xl mb-5 text-primary duration-500"
          icon={icon}
        ></FontAwesomeIcon>
        {inViewport ? (
          <h2 className="text-4xl">
              <CountUp end={number} duration={1}></CountUp>
            {sideText}
          </h2>
        ) : (
          <h2 className="text-4xl">{number}{sideText}</h2>
        )}
        <p className="text-primary duration-500 font-bold">{text}</p>
      </div>
    </ReactVisibilitySensor>
  );
};

export default SummaryCard;
