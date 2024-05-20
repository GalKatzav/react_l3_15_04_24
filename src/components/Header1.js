import React from "react";
import { Link } from "react-router-dom";

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
                <Link to="/">Home</Link>
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
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
