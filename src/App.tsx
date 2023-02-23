import { useState } from "react";
import "./App.css";
import type { Data } from "./types/data";

function App() {
  const data: Data = {
    profile: {
      name: "Jeremy Robson",
    },
    categories: [
      {
        name: "Work",
        daily: {
          current: "5hrs",
          previous: "7hrs",
        },
        weekly: {
          current: "32hrs",
          previous: "36hrs",
        },
        monthly: {
          current: "103hrs",
          previous: "128hrs",
        },
      },
      {
        name: "Play",
        daily: {
          current: "1hr",
          previous: "2hrs",
        },
        weekly: {
          current: "10hrs",
          previous: "8hrs",
        },
        monthly: {
          current: "23hrs",
          previous: "29hrs",
        },
      },
      {
        name: "Study",
        daily: {
          current: "0hrs",
          previous: "1hrs",
        },
        weekly: {
          current: "4hrs",
          previous: "7hrs",
        },
        monthly: {
          current: "13hrs",
          previous: "19hrs",
        },
      },
      {
        name: "Exercise",
        daily: {
          current: "1hrs",
          previous: "1hrs",
        },
        weekly: {
          current: "4hrs",
          previous: "5hrs",
        },
        monthly: {
          current: "11hrs",
          previous: "18hrs",
        },
      },
      {
        name: "Social",
        daily: {
          current: "1hrs",
          previous: "3hrs",
        },
        weekly: {
          current: "5hrs",
          previous: "10hrs",
        },
        monthly: {
          current: "21hrs",
          previous: "23hrs",
        },
      },
    ],
  };
  return (
    <div>
      <div className="profile">
        <span className="report-text">Report for</span>

        <div className="profile-sub-div">Daily Weekly Monthly</div>
      </div>
      21hrs
      {/* <!-- monthly --> */}
      Previous - 23hrs
      {/* <!-- monthly --> */}
      Self Care 0hrs
      {/* <!-- daily --> */}
      Previous - 1hr
      {/* <!-- daily --> */}
      2hrs
      {/* <!-- weekly --> */}
      Previous - 2hrs
      {/* <!-- weekly --> */}
      7hrs
      {/* <!-- monthly --> */}
      Previous - 11hrs
      {/* <!-- monthly --> */}
      <div className="attribution">
        Challenge by
        <a
          href="https://www.frontendmentor.io?ref=challenge"
          target="_blank"
        >
          Frontend Mentor
        </a>
        . Coded by <a href="#">Your Name Here</a>.
      </div>
    </div>
  );
}

export default App;
