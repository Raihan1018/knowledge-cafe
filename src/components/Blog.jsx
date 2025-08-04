import React from "react";

const Blog = ({ blog }) => {
  const {
    id,
    title,
    cover_img,
    author_name,
    posted_date,
    reading_time,
    hash_tag,
    author_img,
  } = blog;
  console.log(blog);
  return (
    <div>
      <img
        className="rounded-2xl my-5 w-full"
        src={cover_img}
        alt={`Cover picture of ${title}`}
      />
      <div className="flex justify-between items-center">
        <div className="flex items-center  space-x-3 my-3">
          <img className="rounded-full w-1/6" src={author_img} alt="" />
          <div>
            <h3 className="text-xl font-semibold">{author_name}</h3>
            <p className="text-gray-400">{posted_date}</p>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <p>{reading_time} min read </p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6 cursor-pointer"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z"
            />
          </svg>
        </div>
      </div>
      <h2 className="text-3xl py-3">{title}</h2>
      {hash_tag.map((hash, index) => (
        <span className="mr-3 text-gray-400" key={index}>
          {hash}
        </span>
      ))}
      <div className="py-3">
        <button className="underline text-blue-500 cursor-pointer">
          Mark as read
        </button>
      </div>
    </div>
  );
};

export default Blog;
