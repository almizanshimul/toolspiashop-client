import React from "react";
import Banner from "./Banner";
import BusinessSummary from "./BusinessSummary";
import ContactUs from "./ContactUs";
import Blogs from "./Blogs";
import Reviews from "./Reviews";
import Tools from "./Tools";

const Home = () => {
  return (
    <>
      <Banner />
      <Tools />
      <BusinessSummary />
      <Blogs></Blogs>
      <Reviews />
      <ContactUs></ContactUs>
    </>
  );
};

export default Home;
