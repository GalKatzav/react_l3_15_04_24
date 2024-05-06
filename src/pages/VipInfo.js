import React, { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
export default function VipInfo() {
  const [info, setInfo] = useState({});
  const [load, setLoad] = useState(true);
  const nav = useNavigate();

  const params = useParams();

  useEffect(() => {
    doApi();
  }, [params]);

  const doApi = async () => {
    const url = "http://fs1.co.il/bus/vip_big.php";
    try {
      setLoad(true);
      // ירוקן את המידע של הבן אדם ככה שנלחץ על נקסט לא נראה את המידע של האדם הקודם
      setInfo({});
      const resp = await fetch(url);
      const data = await resp.json();
      console.log(data);
      const item = data.find((item) => item.rank == params["rank"]);
      if (item) {
        setInfo(item);
      }
      setLoad(false);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="container">
      <h2>{params["rank"]}</h2>
      {load && <h3>Loading...</h3>}
      {/* לבדוק שאחד המאפיינים קיים שלא נקבל  */}
      {info.name && (
        <article>
          <h1>Info about: {info.personName}</h1>
          <img src={info.person.squareImage} className="col-4 my-3" />
          <div>Company: {info.source}</div>
          <div>Bio: {info.bios[0]}</div>
          <Link to="/vip">Back to list</Link>
          <br />
          <button
            onClick={() => {
              // ישגר אותנו לכתובת של וי איי פי +1 מהכתובת הנוכחית וכך יציג את האדם הבא ברשימה
              nav(`/vip/${Number(params["rank"]) + 1}`);
            }}
          >
            NEXT
          </button>
        </article>
      )}
    </div>
  );
}
