import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import { Link, NavLink, Outlet } from "react-router-dom";
import axiosPrivate from "../../api/axiosPrivate";
import Loading from "../../components/Loading";
import auth from "../../firebase.init";

const Dashboard = () => {
  const [user, loading, error] = useAuthState(auth);
  const { data: admin, isLoading } = useQuery("admin", () => {
    return axiosPrivate
      .get(`https://toolspiashop-server.onrender.com/admin/${user.email}`)
      .then((res) => res.data.isAdmin);
  });
  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div className="drawer drawer-mobile mt-[64px]">
      <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content mx-2 mb-12 rounded-2xl">
        <Outlet />
      </div>
      <div className="drawer-side mb-12">
        <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
        <ul className="menu p-4 overflow-y-auto w-80 bg-base-200 rounded-2xl text-base-content border-r-2">
          {admin ? (
            <>
              <li>
                <NavLink to="/dashboard/myProfile">My Profile</NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/manageOrders">Manage All Orders</NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/addProduct">Add A Product</NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/makeAdmin">Make Admin</NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/manageProducts">Manage Products</NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/myOrders">My Orders</NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/addReview">Add Review</NavLink>
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink to="/dashboard/myProfile">My Profile</NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/myOrders">My Orders</NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/addReview">Add Review</NavLink>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
