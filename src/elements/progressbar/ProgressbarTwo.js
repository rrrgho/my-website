import React, {useEffect} from 'react';
import TrackVisibility from "react-on-screen";
import Skill from "./Skill";

const progressData = [
    {
      id: 1,
      title: "Public Speaking & Communication",
      percantage: 95,
      progressColor: "#059DFF",
    },
    {
      id: 2,
      title: "Teamwork",
      percantage: 90,
      progressColor: "#059DFF",
    },
    {
      id: 3,
      title: "Problem Solving",
      percantage: 90,
      progressColor: "#059DFF",
    },
    {
      id: 4,
      title: "Time Management",
      percantage: 80,
      progressColor: "#059DFF",
    },
    {
        id: 4,
        title: "Organizational",
        percantage: 80,
        progressColor: "#059DFF",
    },
];

const ProgressbarTwo = (data) => {
    return (
        <>
            {data.data.map((progress) => (
            <TrackVisibility
                once
                key={progress.id}
                className="single-progress"
            >
                <Skill progress={progress} />
            </TrackVisibility>
            ))}
        </>
    )
}

export default ProgressbarTwo;
