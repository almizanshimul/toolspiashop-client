import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import DeleteConfirmModal from "./DeleteConfirmModal";
import ManageProductsDeleteConfirm from "./ManageProductsDeleteConfirm";

const ManageProductsRow = ({ tool, index, refetch }) => {
  const { _id, name, addedBy, img } = tool;
  const navigate = useNavigate();

  const [deletingTool, setDeletingTool] = useState();
  return (
    <tr>
      <th>{index + 1}</th>
      <td>
        <div className="flex items-center">
          <img className="w-12" src={img} alt={name} />
          <p className="ml-3">{name}</p>
        </div>
      </td>
      <td>{addedBy}</td>
      <td>
        <label
          onClick={() => setDeletingTool(tool)}
          htmlFor="manage-products-delete-confirm-modal"
          className="btn bg-red-500 w-full text-black border-none hover:bg-red-600"
        >
          Delete
        </label>
      </td>
      {deletingTool && (
        <ManageProductsDeleteConfirm
          refetch={refetch}
          deletingTool={deletingTool}
        ></ManageProductsDeleteConfirm>
      )}
    </tr>
  );
};

export default ManageProductsRow;
