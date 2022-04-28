import React, { useState } from "react";
import star from "./images/icon-star.svg";
import { useNavigate } from "react-router-dom";

function Main() {
  const [clickedButtonID, setClickedButtonID] = useState("");
  let navigate = useNavigate();

  const data = ["1", "2", "3", "4", "5"];

  function buttonClick(val) {
    setClickedButtonID(val);
  }

  function submitting() {
    if (clickedButtonID > 0) {
      console.log("inside func" + clickedButtonID);
      return navigate("/thanks", { state: { id: clickedButtonID } });
    } else {
      return navigate("/oops");
    }
  }

  return (
    <div className="the-box">
      <img className="star-icon" src={star} alt="star icon" />
      <h2 className="title-text">How did we do?</h2>
      <p className="body-text">
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
      <ul>
        <div className="row">
          {data.map((item, i) => (
            <button
              key={"button-" + i}
              onClick={() => buttonClick(item)}
              className={
                clickedButtonID === item
                  ? "btn-rating bg-gray-400 pt-1 text-gray-200"
                  : "btn-rating bg-gray-800 pt-1 text-gray-200"
              }
            >
              {item}
            </button>
          ))}
        </div>
      </ul>
      <div className="text-center">
        <button
          onClick={submitting}
          className="btn-submit w-full text-white uppercase tracking-wide pt-3 pb-2 rounded-full"
          type="submit"
        >
          SUBMIT
        </button>
      </div>
    </div>
  );
}

export default Main;
