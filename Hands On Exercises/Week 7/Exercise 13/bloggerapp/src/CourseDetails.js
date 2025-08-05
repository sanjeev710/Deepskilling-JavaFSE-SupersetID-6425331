import React from 'react';

function CourseDetails() {
  const courses = [
    { id: 'C1', name: "Full Stack Web Dev", duration: "3 months" },
    { id: 'C2', name: "React Bootcamp", duration: "6 weeks" }
  ];

  return (
    <div>
      <h3>Course Details</h3>
      <ul>
        {courses.map(course => (
          <li key={course.id}>
            {course.name} – {course.duration}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CourseDetails;
