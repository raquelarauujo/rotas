import React from 'react';

const blogs = [
  { id: 1, title: "Rede Social Para Amantes de Filmes", url: "https://letterboxd.com/" },
  { id: 2, title: "Rede Social Para Amantes de Música", url: "https://www.last.fm/home" },
  { id: 3, title: "Rede Social Para Amantes de Livros", url: "https://www.goodreads.com/" },
];

const Blogs = () => {
  return (
    <div>
      <h1>Blogs</h1>
      <ul>
        {blogs.map(blog => (
          <li key={blog.id}>
            <a href={blog.url} target="_blank" rel="noopener noreferrer">
              {blog.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Blogs;
