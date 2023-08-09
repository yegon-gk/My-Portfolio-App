import React from "react";
import WorkItem from "./WorkItem";


const Data = [
    {
        year:2023,
        title: "Software Engineer",
        duration: "3 Years",
        details: "A software engineer designs, develops, and maintains software applications, utilizing programming languages, algorithms, and problem-solving skills to create functional and efficient solutions for various purposes."
    },
    {
        year:2020,
        title: "Software Engineer",
        duration: "3 Years",
        details: "A software engineer designs, develops, and maintains software applications, utilizing programming languages, algorithms, and problem-solving skills to create functional and efficient solutions for various purposes."
    },
    {
        year:2017,
        title: "Software Engineer",
        duration: "3 Years",
        details: "A software engineer designs, develops, and maintains software applications, utilizing programming languages, algorithms, and problem-solving skills to create functional and efficient solutions for various purposes."
    },
    {
        year:2014,
        title: "Software Engineer",
        duration: "3 Years",
        details: "A software engineer designs, develops, and maintains software applications, utilizing programming languages, algorithms, and problem-solving skills to create functional and efficient solutions for various purposes."
    },
]

const Work = () => {
  return (
    <div id="work" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-orange-600">Work</h1>
      {Data.map((item, idx) => (
        <WorkItem
          key={idx}
          year={item.year}
          title={item.title}
          duration={item.duration}
          details={item.details}
        />
      ))}
    </div>
  );
};

export default Work;