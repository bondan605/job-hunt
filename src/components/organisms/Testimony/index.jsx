import React from "react";
import "./style.css";
const listOfTestimony = [
  "/images/jobox.png",
  "/images/dsign.png",
  "/images/wave.png",
  "/images/twins.png",
  "/images/bubles.png",
];

export default function Testimony() {
  return (
    <div className="testimony-wrapper">
      <div className="text-info">Companies we helped grow</div>
      <div className="list-testimony">
        {listOfTestimony.map((item, i) => (
          <img src={item} alt={item} key={i} />
        ))}
      </div>
    </div>
  );
}
