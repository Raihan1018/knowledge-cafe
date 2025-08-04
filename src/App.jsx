import React from "react";
import Header from "./components/Header";
import Blogs from "./components/Blogs";
import BookMarks from "./components/BookMarks";

const App = () => {
  return (
    <div className="max-w-6xl mx-auto p-5">
      <Header />
      <div className="md:flex">
        <Blogs />
        <BookMarks />
      </div>
    </div>
  );
};

export default App;
