import React, { useContext } from "react";
import { AppContext } from "../context/ContextShop";
import ShopItem from "./ShopItem";

export default function ShopList() {
  const { shop_ar } = useContext(AppContext);
  console.log(shop_ar);
  return (
    <div className="container mt-4">
      <div className="row">
        {shop_ar.map((item) => {
          return <ShopItem key={item.id} item={item} />;
        })}
      </div>
    </div>
  );
}
