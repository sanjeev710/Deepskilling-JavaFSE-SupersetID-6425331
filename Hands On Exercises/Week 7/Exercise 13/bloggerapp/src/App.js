import React, { useState } from 'react';
import BookDetails from './BookDetails';
import BlogDetails from './BlogDetails';
import CourseDetails from './CourseDetails';

function App() {
  const [selected, setSelected] = useState("books");

  let content;
  if (selected === "books") {
    content = <BookDetails />;
  } else if (selected === "blogs") {
    content = <BlogDetails />;
  } else {
    content = <CourseDetails />;
  }

  return (
    <div style={{ padding: '20px' }}>
      <h2>BloggerApp</h2>
      <div style={{ marginBottom: '20px' }}>
        <button onClick={() => setSelected("books")}>Show Books</button>
        <button onClick={() => setSelected("blogs")} style={{ marginLeft: '10px' }}>Show Blogs</button>
        <button onClick={() => setSelected("courses")} style={{ marginLeft: '10px' }}>Show Courses</button>
      </div>

      {content}

      <hr />

      <p>
        {selected === "books"
          ? "You are viewing book list."
          : selected === "blogs"
          ? "You are viewing blog posts."
          : "You are viewing courses."}
      </p>

      {selected === "courses" && <p>Courses are hot right now!</p>}
    </div>
  );
}

export default App;
