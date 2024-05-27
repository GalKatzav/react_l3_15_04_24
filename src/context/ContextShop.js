import { createContext, useState, useLayoutEffect } from "react";

export const AppContext = createContext(null);

// קומפוננטה שתעטוף את כל האפ ותספק סטורי גלובלי לכל הקומפוננטות
export default function ContextProvider({ children }) {
  const [shop_ar, setShopAr] = useState([
    { name: "Milk", amount: 4, id: 1 },
    { name: "Pizza", amount: 3, id: 2 },
    { name: "Bamba", amount: 5, id: 3 },
  ]);

  // ישמש אם להציג את טופס העריכה בפופ אפ
  const [showEdit, setShowEdit] = useState(false);

  // ישמש לקבלת פרטים על הפריט שנרצה לערך
  const [currentEdit, setCurrentEdit] = useState({});

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

  // פונקציית עריכה של פריט
  const updateProduct = (_updateItem, _id) => {
    const map_ar = shop_ar.map((item) => {
      // אם מזהה שהאיי די שווה לאיי די של הפריט שאני רוצה
      // לערוך יחזיר למערך החדש את הפריט עם המאפיינים שנערכו
      // ולא את האובייקט עצמו כפי שהיה לפני השינוי
      if (item.id == _id) {
        return _updateItem;
      }
      return item;
    });
    setShopAr(map_ar);
    localStorage.setItem("shop_ar", JSON.stringify([map_ar]));
  };

  // כל מה בצריך להיות בסטור הגלובלי ייכנס לתוך האובייקט גלובל ואל שהקונטקסט ייזן בתוך הפרופ ווליו שלו
  const globalVal = {
    shop_ar,
    addProduct,
    resetList,
    deleteProduct,
    showEdit,
    setShowEdit,
    currentEdit,
    setCurrentEdit,
    updateProduct,
  };

  return (
    <AppContext.Provider value={globalVal}>{children}</AppContext.Provider>
  );
}
