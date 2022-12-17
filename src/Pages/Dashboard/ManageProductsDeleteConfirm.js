import React from "react";
import { toast } from "react-toastify";
import axiosPrivate from "../../api/axiosPrivate";

const ManageProductsDeleteConfirm = ({ deletingTool, refetch }) => {
  const { name, _id } = deletingTool;
  const handleDelete = () => {
    axiosPrivate.delete(`https://toolspiashop-server.vercel.app//tools/${_id}`)
      .then(res => {
        if (res.data.acknowledged === true) {
          toast.success("Tool deleted successfully", {
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
        }
        else {
          toast.success("Something Went Wrong", {
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
      })
  }
  return (
    <div>
      <input type="checkbox" id="manage-products-delete-confirm-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box z-50 relative">
          <label
            htmlFor="manage-products-delete-confirm-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">
            Do you really want to Delete Tool: {name}
          </h3>
          <p className="py-4">
            This can't be undone.
          </p>
          <div className="modal-action">
            <button onClick={handleDelete} className="btn btn-error">Delete</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageProductsDeleteConfirm;