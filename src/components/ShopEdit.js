import React, { useRef, useContext } from "react";
import "../css/shopEdit.css";
import { AppContext } from "../context/ContextShop";

export default function ShopEdit() {
  const { setShowEdit, currentEdit, updateProduct } = useContext(AppContext);
  const nameRef = useRef();
  const amountRef = useRef();
  const onSub = (e) => {
    // מונע את הברירת מחדל של ריפרש לעמוד
    e.preventDefault();
    const editItem = {
      name: nameRef.current.value,
      amount: amountRef.current.value,
      id: currentEdit.id,
    };
    updateProduct(editItem, currentEdit.id);
    setShowEdit(false);
  };
  return (
    <div className="edit_dark_window">
      <div className="dark_box_inside">
        <form onSubmit={onSub} className="">
          <label>Name:</label>
          <input
            defaultValue={currentEdit.name}
            ref={nameRef}
            type="text"
            className="form-control"
          />
          <label>Amount:</label>
          <input
            defaultValue={currentEdit.amount}
            ref={amountRef}
            type="nubmer"
            className="form-control"
          />
          <button className="btn btn-success mt-3">Update</button>
          <button
            onClick={() => {
              setShowEdit(false);
            }}
            type="button"
            className="btn btn-danger mt-3 ms-3"
          >
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
}
