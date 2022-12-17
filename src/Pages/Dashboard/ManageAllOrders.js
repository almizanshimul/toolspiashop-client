import React from "react";
import { useQuery } from "react-query";
import axiosPrivate from "../../api/axiosPrivate";
import Loading from "../../components/Loading";
import ManageOrderRow from "./ManageOrderRow";

const ManageAllOrders = () => {
  const { data: orders, isLoading, refetch } = useQuery("users", () => {
    return axiosPrivate
      .get("https://toolspiashop-server.onrender.com/order")
      .then((res) => res.data);
  });
  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div>
      <h2 className="text-2xl">
        Make A User <span className="text-primary">Admin</span>
      </h2>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>Sl.</th>
              <th>Item</th>
              <th>User Name</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Status</th>
              <th>Action(Delete)</th>
            </tr>
          </thead>
          <tbody>
            {
              orders.map((order, index) => <ManageOrderRow
                key={order._id}
                refetch={refetch}
                index={index}
                order={order}
              ></ManageOrderRow>)
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageAllOrders;