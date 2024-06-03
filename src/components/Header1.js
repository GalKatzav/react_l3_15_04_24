import React from "react";
import { Link } from "react-router-dom";
import { BiSolidHomeHeart } from "react-icons/bi";

export default function Header1() {
  return (
    <header className="container-fluid bg-warning">
      <div className="container p-2">
        <div className="row align-items-center">
          <div className="logo col-auto">
            <h2>My logo</h2>
          </div>
          <nav className="col-auto">
            <ul>
              <li>
                {/* <Link to="/">Home</Link> */}
                <Link to="/">
                  <h2>
                    <BiSolidHomeHeart />
                  </h2>
                </Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/counter">Counter</Link>
              </li>
              <li>
                <Link to="/shop">Shopping</Link>
              </li>
              <li>
                <Link to="/form1">Form1</Link>
              </li>
              <li>
                <Link to="/icons">Icons</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
