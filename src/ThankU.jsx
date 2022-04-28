import React from "react";
import thanks from "./images/illustration-thank-you.svg";
import { useLocation } from "react-router";

export default function ThankU() {
  const { state } = useLocation();
  const { id } = state; // Read values passed on state
  console.log("Thank" + id);
  return (
    <div className="the-box text-center">
      <img src={thanks} alt="thank u pic" className="thanks-pic h-70 w-70" />
      <button className="thanku-text bg-gray-700 rounded-full">
        {" "}
        You selected {id} out of 5{" "}
      </button>
      <h2 className="title-text">Thank You!</h2>
      <p className="body-text">
        {" "}
        We appreciate you taking the time to give a rating. If you ever need
        more support, don’t hesitate to get in touch!
      </p>
    </div>
  );
}