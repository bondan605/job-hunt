import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";

import "./style.css";

export default function ContentHeader({ word1, word2 }) {
  return (
    <div className="header">
      <div className="title">
        {word1} <span>{word2}</span>
      </div>
      <div className="btn-detail">
        <p>Show all jobs</p>
        <AiOutlineArrowRight />
      </div>
    </div>
  );
}
