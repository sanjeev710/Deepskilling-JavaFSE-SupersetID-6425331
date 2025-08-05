import React from 'react';

function BookDetails() {
  const books = [
    { id: 1, title: "React Explained", author: "Zac Gordon" },
    { id: 2, title: "Eloquent JavaScript", author: "Marijn Haverbeke" },
    { id: 3, title: "JavaScript: The Good Parts", author: "Douglas Crockford" }
  ];

  return (
    <div>
      <h3>Book Details</h3>
      <ul>
        {books.map(book => (
          <li key={book.id}>
            <strong>{book.title}</strong> by {book.author}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BookDetails;
