import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import { Link, NavLink, useLocation } from "react-router-dom";
import axiosPrivate from "../api/axiosPrivate";
import auth from "../firebase.init";

const Navbar = () => {
  const [hideNavbar, setHideNavbar] = useState(false);
  const [user, loading, error] = useAuthState(auth);
  const [admin, setAdmin] = useState(false);
  const location = useLocation();
  useEffect(() => {
    if (location.pathname === "/login" || location.pathname === "/register") {
      setHideNavbar(true);
    } else {
      setHideNavbar(false);
    }
  }, [location]);

  useEffect(() => {
    axiosPrivate
      .get(`https://toolspiashop.herokuapp.com/admin/${user?.email}`)
      .then((res) => setAdmin(res.data.isAdmin));
  }, []);

  if (loading) {
    return;
  }


  const navItems = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/portfolio">My Portfolio</NavLink>
      </li>
      <li>
        <NavLink to="/blogs">Blogs</NavLink>
      </li>
      {user && (
        <li>
          <NavLink to="/dashboard">Dashboard</NavLink>
        </li>
      )}
      {
        user ? (
          <button
            onClick={() => {
              signOut(auth);
              localStorage.removeItem("accessToken");
            }}
            className="btn btn-secondary"
          >
            {user.displayName}: Sign Out
          </button>
        ) : (
          <li>
            <NavLink to="/login">Login</NavLink>
          </li>
        )
      }
    </>
  );

  return (
    <div
      className={`navbar z-50 bg-base-100 ${hideNavbar && "hidden"
        } fixed duration-500 top-0 bg-white text-black`}
    >
      <div className="container mx-auto">
        <div className="navbar-start flex">
          <div className="dropdown">
            <label tabIndex="0" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex="0"
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-screen gap-5 ml-[-8px]"
            >
              {navItems}
            </ul>
          </div>
          <Link
            to="/"
            className="btn btn-ghost normal-case font-lobster text-2xl  lg:text-3xl"
          >
            Tools<span className="text-primary font-lobster">PiaShop</span>
          </Link>
        </div>
        <div className="navbar-end w-full hidden lg:flex">
          <ul className="menu menu-horizontal p-0 gap-5">{navItems}</ul>
        </div>
        <div className="navbar-end text-right lg:hidden">
          <label
            htmlFor="dashboard-drawer"
            className="btn btn-primary drawer-button lg:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
