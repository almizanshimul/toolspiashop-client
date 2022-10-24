import React from "react";
import Banner from "./Banner";
import BusinessSummary from "./BusinessSummary";
import ContactUs from "./ContactUs";
import EndlessTrust from "./EndlessTrust";
import Reviews from "./Reviews";
import Tools from "./Tools";

const Home = () => {
  return (
    <>
      <Banner />
      <Tools />
      <BusinessSummary />
      <EndlessTrust></EndlessTrust>
      <Reviews />
      <ContactUs></ContactUs>
    </>
  );
};

export default Home;
