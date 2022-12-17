import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import axiosPrivate from "../../api/axiosPrivate";

const DeleteConfirmModal = ({ deletingOrder, refetch }) => {
  const { name, _id, quantity, toolId } = deletingOrder;
  const [tool, setTool] = useState({});
  useEffect(() => {
    axios
      .get(`https://toolspiashop-server.onrender.com/tools/${toolId}`)
      .then((res) => setTool(res.data));
  }, [toolId]);
  const handleDelete = () => {
    axiosPrivate
      .delete(
        `https://toolspiashop-server.onrender.com/order/${_id}?toolId=${toolId}&newQuantity=${parseInt(tool?.availableQuantity) + parseInt(quantity)
        }`
      )
      .then((res) => {
        if (res.data.acknowledged === true) {
          toast.success("Order deleted successfully", {
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
      });
  };
  return (
    <div>
      {/* <label htmlFor="my-modal-3" className="btn modal-button">
        open modal
      </label> */}
      <input type="checkbox" id="delete-confirm-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box z-50 relative">
          <label
            htmlFor="delete-confirm-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">
            Do you really want to cancel order: {name}
          </h3>
          <p className="py-4">This can't be undone.</p>
          <div className="modal-action">
            <button onClick={handleDelete} className="btn btn-error">
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteConfirmModal;
