import React from 'react';

function BlogDetails() {
  const blogs = [
    { id: 101, title: "React vs Angular", author: "John" },
    { id: 102, title: "JSX Deep Dive", author: "Sara" }
  ];

  return (
    <div>
      <h3>Blog Details</h3>
      <ul>
        {blogs.map(blog => (
          <li key={blog.id}>
            <strong>{blog.title}</strong> by {blog.author}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BlogDetails;
