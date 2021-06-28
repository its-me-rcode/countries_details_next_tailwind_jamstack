import React from "react";

const Navbar = ({ switchTheme }) => {
  return (
    <div className="  bg-[#ffffff] sticky top-0 bg-opacity-100 z-50 shadow-md antialiased text-[#111517] dark:text-[#ffffff]">
      <div className="container mx-auto flex justify-between items-center h-24 sm:h-16 m">
        <div className="">
          <h1 className="text-md sm:text-2xl font-bold ml-3">
            Where In The World?
          </h1>
        </div>
        <div className="flex cursor-pointer" onClick={switchTheme}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 dark:fill-current"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
            />
          </svg>
          <p className="font-semibold ml-2 mr-4">Dark Mode </p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
