import React, { useState } from "react";
import { toast } from "react-toastify";
import axiosPrivate from "../../api/axiosPrivate";
import DeleteConfirmModal from "./DeleteConfirmModal";

const ManageOrderRow = ({ order, index, refetch }) => {
  const { _id, name, userName, price, quantity, status, isPaid } = order;
  const [deletingOrder, setDeletingOrder] = useState();
  const setAsShipped = () => {
    axiosPrivate
      .put(`https://toolspiashop.herokuapp.com/order/${_id}`, {
        status: "shipped",
      })
      .then((res) => {
        if (res.data.acknowledged === true) {
          toast.success("Order Shipped Successfully", {
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
      <td>{userName}</td>
      <td>{price}</td>
      <td>{quantity}</td>
      <td>
        {isPaid ? (
          <>
            {status === "pending" ? (
              <div className="flex items-center">
                <p className="mr-2">Pending</p>
                <button onClick={setAsShipped} className="btn btn-primary">
                  Set As Shipped
                </button>
              </div>
            ) : (
              <p className="text-green-500 text-center">Shipped</p>
            )}
          </>
        ) : (
          <p className="text-red-500 text-center">Unpaid</p>
        )}
      </td>
      <td>
        <label
          onClick={() => setDeletingOrder(order)}
          htmlFor="delete-confirm-modal"
          className="btn bg-red-500 w-full text-black border-none hover:bg-red-600"
        >
          Cancel
        </label>
      </td>
      <td>
        {deletingOrder && (
          <DeleteConfirmModal
            refetch={refetch}
            deletingOrder={deletingOrder}
          ></DeleteConfirmModal>
        )}
      </td>
    </tr>
  );
};

export default ManageOrderRow;
