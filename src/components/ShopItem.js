import React, { useContext } from "react";
import { AppContext } from "../context/ContextShop";

export default function ShopItem({ item }) {
  const { deleteProduct, setShowEdit, setCurrentEdit } = useContext(AppContext);
  return (
    <div className="col-md-8 border p-2 my-3 shadow-sm">
      <button
        onClick={() => {
          setShowEdit(true);
          setCurrentEdit(item);
        }}
        className="float-end bg-info ms-2"
      >
        Edit
      </button>
      <button
        onClick={() => {
          deleteProduct(item.id);
        }}
        className="float-end bg-danger"
      >
        X
      </button>
      <h5>
        {item.name} - {item.amount}
      </h5>
    </div>
  );
}
