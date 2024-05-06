import React, { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

export default function About() {
  const nav = useNavigate();
  const [query] = useSearchParams();
  const [inpVal, setInpVal] = useState("");
  const onGoClick = () => {
    nav("/vip");
  };
  const onSub = (e) => {
    e.preventDefault();
    console.log(inpVal);
    nav(`/about?m=From search&color=${inpVal}`);
  };
  return (
    <div className="container">
      About
      <form onSubmit={onSub} className="col-md-6 d-flex">
        <input
          onChange={(e) => setInpVal(e.currentTarget.value)}
          type="search"
          className="form-control"
        />
        <button>Search</button>
      </form>
      <br />
      <h2 style={{ background: query.get("color") }}>
        Message from query: {query.get("m")} - color {query.get("color")}
      </h2>
      <button onClick={onGoClick}>Go to Vip</button>
      <button
        onClick={() => {
          nav("/about?m=Hello&color=blue");
        }}
      >
        Messge:hello
      </button>
      <button
        onClick={() => {
          nav("/about?m=Bye&color=yellow");
        }}
      >
        Messge:bye
      </button>
    </div>
  );
}
