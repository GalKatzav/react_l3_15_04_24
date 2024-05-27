import React, { useRef, useContext } from "react";
import { AppContext } from "../context/ContextShop";

export default function ShopForm() {
  const { addProduct, resetList } = useContext(AppContext);

  // מאפשר לקשר את המשתנה שיצרנו לאינפוט בג'י אס אקס
  const nameRef = useRef();
  const amountRef = useRef();

  const onSub = (e) => {
    // מונע את ברירת המחדל לעשות ריפרש לעמוד
    e.preventDefault();
    const newItem = {
      name: nameRef.current.value,
      amount: amountRef.current.value,
      id: Date.now(), // איי די ייחודי - זמן יוניקס במילי שניות
    };
    if (newItem.name.length > 0) {
      addProduct(newItem);
    }
    console.log(newItem);
    localStorage.setItem("counter", "999");
  };

  return (
    <div className="container">
      <h1>Order Form: </h1>
      <form onSubmit={onSub} className="col-md-5">
        <label>Name:</label>
        <input ref={nameRef} type="text" className="form-control" />
        <label>About:</label>
        <input
          ref={amountRef}
          type="number"
          defaultValue="1"
          className="form-control"
        />
        <button className="btn btn-success mt-3">Add new</button>
        <button
          type="button"
          onClick={resetList}
          className="btn btn-danger mt-3 ms-3"
        >
          Reset List
        </button>
      </form>
    </div>
  );
}
