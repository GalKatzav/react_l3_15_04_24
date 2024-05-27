import React, { useContext } from "react";
import ShopForm from "../components/ShopForm";
import ShopList from "../components/ShopList";
import ShopEdit from "../components/ShopEdit";
import { AppContext } from "../context/ContextShop";

export default function ShopPage() {
  const { showEdit } = useContext(AppContext);
  return (
    <>
      {showEdit && <ShopEdit />}
      <ShopForm />
      <ShopList />
    </>
  );
}
