import React from "react";
import "./Loading.css";
export default function Loading(props) {
  return (
    <div className="loader-container">
      <div id="loader">
        <div id="box"></div>
        <div id="hill"></div>
      </div>
    </div>
  );
}
