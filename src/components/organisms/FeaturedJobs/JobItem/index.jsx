import React from "react";

export default function JobItem({
  logo,
  jobType,
  name,
  type,
  location,
  desc,
  categories,
}) {
  return (
    <div className="featured-item">
      <div className="logo-tag">
        <img src={logo} alt={logo} />
        <span className="tag">{jobType}</span>
      </div>
      <div className="detail">
        <div className="name">{name}</div>
        <div className="location">
          {type} | {location}
        </div>
        <div className="desc">{desc}</div>
      </div>
      <div className="category-flex">
        {categories.map((item, i) => (
          <span key={i} className="category">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
