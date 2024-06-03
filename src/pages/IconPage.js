import React from "react";
import { FaAppleAlt } from "react-icons/fa";

// https://react-icons.github.io/react-icons/ קישור לאייקונים

export default function IconPage() {
  return (
    <div className="container">
      <h1>Icons in react</h1>
      <h2>Test</h2>
      <FaAppleAlt className="h1" style={{ color: "red" }} />
    </div>
  );
}
