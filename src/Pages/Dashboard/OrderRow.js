import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import DeleteConfirmModal from "./DeleteConfirmModal";

const OrderRow = ({ order, index, refetch }) => {
  const { _id, name, img, price, quantity, unit, isPaid, transactionId } = order;
  const navigate = useNavigate();

  const [deletingOrder, setDeletingOrder] = useState();
  return (
    <tr>
      <th>{index + 1}</th>
      <td>
        <div className="flex items-center">
          <img className="w-12" src={img} alt={name} />
          <p className="ml-3">{name}</p>
        </div>
      </td>
      <td>
        {quantity}
        {unit}
      </td>
      <td>{price}</td>
      <td>
        {!isPaid && !transactionId ? (
          <button
            onClick={() => navigate(`/dashboard/payment/${_id}`)}
            className="btn w-full btn-primary border-none"
          >
            Pay
          </button>
        ) : (
          <p className="text-green-500">
            trxId: {transactionId}
          </p>
        )}
      </td>
      <td>
        {!isPaid && !transactionId ? (
          <label
            onClick={() => setDeletingOrder(order)}
            htmlFor="delete-confirm-modal"
            className="btn bg-red-500 w-full text-black border-none hover:bg-red-600"
          >
            Cancel
          </label>
        ) : (
          <p className="text-green-500">
            Paid
          </p>
        )}
      </td>
      {deletingOrder && (
        <DeleteConfirmModal
          refetch={refetch}
          deletingOrder={deletingOrder}
        ></DeleteConfirmModal>
      )}
    </tr>
  );
};

export default OrderRow;
