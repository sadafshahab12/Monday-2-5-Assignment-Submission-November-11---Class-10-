import React from "react";

const Loading = () => {
  return (
    <div className="book-card shadow-lg rounded-lg hover:scale-105 duration-500 p-5 bg-gray-500 animate-pulse">
      <div className="w-full h-[20rem] bg-gray-400 rounded-tr-lg rounded-tl-lg"></div>
      <div className="space-y-3 p-5">
        <div className="h-6 bg-gray-300 rounded w-[70%]"></div>
        <div className="h-4 bg-gray-300 rounded w-[80%]"></div>
        <div className="h-4 bg-gray-300 rounded w-[50%]"></div>
        <div className="h-4 bg-gray-300 rounded w-[60%]"></div>
        <div className="flex justify-between items-center">
          <div className="h-8 bg-gray-300 rounded w-[45%]"></div>
          <div className="h-8 bg-gray-300 rounded w-[45%]"></div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
