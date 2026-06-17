import React from "react";
import CourseCard from "../components/CourseCard";

export default function Courses() {
  const courses = [
    {
      title: "React Basics",
      credits: 3,
      icon: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
    },
    {
      title: "Business Statistics",
      credits: 4,
      icon: "https://cdn-icons-png.flaticon.com/512/2331/2331970.png",
    },
    {
      title: "Web Development",
      credits: 3,
      icon: "https://cdn-icons-png.flaticon.com/512/1055/1055687.png",
    },
    {
      title: "Database Management",
      credits: 4,
      icon: "https://cdn-icons-png.flaticon.com/512/4248/4248443.png",
    },
  ];

  return (
    <div className="page">
      <div className="section">
        <h2>📚 My Courses</h2>
        <p>Manage and track your enrolled courses.</p>

        <div className="course-list">
          {courses.map((course, index) => (
            <CourseCard
              key={index}
              title={course.title}
              credits={course.credits}
              icon={course.icon}
            />
          ))}
        </div>
      </div>
    </div>
  );
}




