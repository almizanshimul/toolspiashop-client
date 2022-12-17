import React from "react";
import { toast } from "react-toastify";
import axiosPrivate from "../../api/axiosPrivate";

const MakeAdminRow = ({ user, index, refetch }) => {
  const { name, email, role } = user;
  const makeUserAdmin = () => {
    axiosPrivate
      .put(`https://toolspiashop-server.vercel.app//makeAdmin/${email}`, { role: 'admin' })
      .then((res) => {
        if (res.data.acknowledged === true) {
          toast.success("Admin Making Successful", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
          refetch();
        } else {
          toast.error("Something Went Wrong", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
        }
      });
  };
  return (
    <tr>
      <th>{index + 1}</th>
      <td>{name}</td>
      <td>{email}</td>
      <td>
        {role === "admin" ? (
          <p className="text-green-500">Admin</p>
        ) : (
          <button onClick={makeUserAdmin} className="btn btn-primary">Make Admin</button>
        )}
      </td>
    </tr>
  );
};

export default MakeAdminRow;
