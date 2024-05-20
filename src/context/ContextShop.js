import { createContext, useState, useLayoutEffect } from "react";

export const AppContext = createContext(null);

// קומפוננטה שתעטוף את כל האפ ותספק סטורי גלובלי לכל הקומפוננטות
export default function ContextProvider({ children }) {
  const [shop_ar, setShopAr] = useState([
    { name: "Milk", amount: 4, id: 1 },
    { name: "Pizza", amount: 3, id: 2 },
    { name: "Bamba", amount: 5, id: 3 },
  ]);

  useLayoutEffect(() => {
    if (localStorage.getItem("shop_ar")) {
      setShopAr(JSON.parse(localStorage.getItem("shop_ar")));
    }
  }, []);

  const addProduct = (newItem) => {
    setShopAr([...shop_ar, newItem]);
    //מכיוון שלוקאל סטורג' יודע לעבוד רק מול סטרינג לפני שנשמור את המערך נהפוך אותו לסטרינג
    localStorage.setItem("shop_ar", JSON.stringify([...shop_ar, newItem]));
  };

  const resetList = () => {
    if (window.confirm("Delete all list?")) {
      setShopAr([]);
    }
    localStorage.setItem("shop_ar", JSON.stringify([]));
  };

  const deleteProduct = (_id) => {
    const filter_ar = shop_ar.filter((item) => {
      return item.id != _id;
    });
    setShopAr(filter_ar);
    localStorage.setItem("shop_ar", JSON.stringify([filter_ar]));
  };

  // כל מה בצריך להיות בסטור הגלובלי ייכנס לתוך האובייקט גלובל ואל שהקונטקסט ייזן בתוך הפרופ ווליו שלו
  const globalVal = {
    shop_ar,
    addProduct,
    resetList,
    deleteProduct,
  };

  return (
    <AppContext.Provider value={globalVal}>{children}</AppContext.Provider>
  );
}
