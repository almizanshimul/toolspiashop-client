import React from "react";
import { useQuery } from "react-query";
import axiosPrivate from "../../api/axiosPrivate";
import Loading from "../../components/Loading";
import MakeAdminRow from "./MakeAdminRow";
import ManageProductsRow from "./ManageProductRow";

const ManageProducts = () => {
  const { data: tools, isLoading, refetch } = useQuery("users", () => {
    return axiosPrivate
      .get("https://toolspiashop-server.vercel.app//tools")
      .then((res) => res.data);
  });
  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div>
      <h2 className="text-2xl">
        Manage <span className="text-primary">Products</span>
      </h2>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Added By</th>
              <th>Action (Delete)</th>
            </tr>
          </thead>
          <tbody>
            {
              tools.map((tool, index) => <ManageProductsRow key={tool._id} refetch={refetch} index={index} tool={tool}></ManageProductsRow>)
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageProducts;