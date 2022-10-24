import { faEnvelope, faMapMarkerAlt, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  const [hideFooter, setHideFooter] = useState(false);
  const location = useLocation();
  useEffect(() => {
    if (
      location.pathname === '/login' ||
      location.pathname === '/register'
    ) {
      setHideFooter(true);
    }
    else {
      setHideFooter(false);
    }
  }, [location])
  return (
    <div className={hideFooter && 'hidden'}>
      <footer className="footer p-10 bg-primary text-white">
        <div>
            <Link to="/" className="normal-case font-lobster text-2xl lg:text-5xl mt-10 ml-5" >
              Tools<span className="text-black font-lobster">PiaShop</span>
            </Link>
        </div>
        <div>
          <span className="text-2xl text-white uppercase">Company</span>
          <Link to="/" className="link link-hover">About us</Link>
          <Link to="/" className="link link-hover">Contact</Link>
          <Link to="/" className="link link-hover">Jobs</Link>
          <Link to="/" className="link link-hover">Press kit</Link>
        </div>
        <div>
          <span className="text-2xl text-white uppercase">Legal</span>
          <Link to="/" className="link link-hover">Terms of use</Link>
          <Link to="/" className="link link-hover">Privacy policy</Link>
          <Link to="/" className="link link-hover">Cookie policy</Link>
        </div>
        <div>
          <span className="text-2xl text-white uppercase">Quick Links</span>
          <Link to="/" className="link link-hover">Login</Link>
          <Link to="/" className="link link-hover">Register</Link>
          <Link to="/" className="link link-hover">Dashboard</Link>
          <Link to="/" className="link link-hover">My Orders</Link>
        </div>
      </footer>

      <div className="bg-primary text-white">
        <div className="container mx-auto py-5 text-center">
          <hr className="border-white pt-5" />
          <h5>&copy; Copyright 2022 || <Link to='/' className="font-lobster text-black text-xl">ToolsPiaShop</Link></h5>
        </div>
      </div>
    </div>
  );
};

export default Footer;
