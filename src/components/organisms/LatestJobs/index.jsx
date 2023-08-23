import React, { useEffect } from "react";

import ContentHeader from "../../atoms/ContentHeader";

import "./style.css";

import JobItem from "./JobItem";
import { useDispatch, useSelector } from "react-redux";
import { getLatestJobs } from "../../../redux/latestJob/action";

const dummyData = [
  {
    id: 1,
    logo: "/images/7.png",
    jobType: "Full Time",
    name: "Social Media Assistant",
    type: "Agency",
    location: "Paris, France",
    categories: ["Marketing", "Design"],
  },
  {
    id: 2,
    logo: "/images/5.png",
    jobType: "Full Time",
    name: "Social Media Assistant",
    type: "Agency",
    location: "Paris, France",
    categories: ["Marketing", "Design"],
  },
  {
    id: 3,
    logo: "/images/dropbox.png",
    jobType: "Full Time",
    name: "Brand Designer",
    type: "Agency",
    location: "San Fransisco, USA",
    categories: ["Marketing", "Design"],
  },
  {
    id: 4,
    logo: "/images/2.png",
    jobType: "Full Time",
    name: "Brand Designer",
    type: "Agency",
    location: "San Fransisco, USA",
    categories: ["Marketing", "Design"],
  },
  {
    id: 5,
    logo: "/images/4.png",
    jobType: "Full Time",
    name: "Interactive Developer",
    type: "Agency",
    location: "Hamburg, Germany",
    categories: ["Marketing", "Design"],
  },
  {
    id: 6,
    logo: "/images/3.png",
    jobType: "Full Time",
    name: "Interactive Developer",
    type: "Agency",
    location: "Hamburg, Germany",
    categories: ["Marketing", "Design"],
  },
  {
    id: 7,
    logo: "/images/6.png",
    jobType: "Full Time",
    name: "HR Manager",
    type: "Agency",
    location: "Lucern, Switzerland",
    categories: ["Marketing", "Design"],
  },
  {
    id: 8,
    logo: "/images/1.png",
    jobType: "Full Time",
    name: "HR Manager",
    type: "Agency",
    location: "Lucern, Switzerland",
    categories: ["Marketing", "Design"],
  },
];

export default function LatestJobs() {
  const { jobs } = useSelector((state) => state.latestJob);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getLatestJobs());
  }, []);

  return (
    <div className="job-wrapper">
      <ContentHeader word1="Latest" word2="jobs open" />
      <div className="job-content">
        {jobs.map((item, i) => (
          <JobItem {...item} key={i} />
        ))}
      </div>
    </div>
  );
}
