import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
export default function VipList() {
  const [vip_ar, setVipAr] = useState([]);
  useEffect(() => {
    doApi();
  }, []);
  const doApi = async () => {
    const url = "http://fs1.co.il/bus/vip_big.php";
    try {
      const resp = await fetch(url);
      const data = await resp.json();
      console.log(data);
      setVipAr(data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="container">
      <h1>Vip list:</h1>
      <div className="row">
        {vip_ar.map((item) => {
          return (
            <div key={item.rank} className="col-md-6 border p-2">
              <img
                src={item.person.squareImage}
                className="float-start me-2 w-25"
              />
              <h2>{item.personName}</h2>
              {/* toLocaleString() - ידאג שכל מספר שלישי יהיה עם פסיק
            וגם דואג להגביל את הספרות העישרוניות */}
              <div>{(item.finalWorth * 1000000).toLocaleString()} USD</div>
              <Link to={`/vip/${item.rank}`}>More info</Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
