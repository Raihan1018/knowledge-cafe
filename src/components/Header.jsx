import React from "react";

const Header = () => {
  return (
    <header>
      <div className="flex justify-between items-center p-5">
        <div>
          <h2 className="text-xl">Knowledge Cafe</h2>
        </div>
        <div>
          <img
            className="w-1/2"
            src="https://img.icons8.com/?size=100&id=23241&format=png&color=000000"
            alt=""
          />
        </div>
      </div>
      <hr />
    </header>
  );
};

export default Header;
