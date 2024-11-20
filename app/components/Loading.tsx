// Loading.tsx
import React from "react";

// Skeleton Card for the entire Book Card
const Loading = () => {
  return (
    <div className="book-card shadow-lg rounded-lg hover:scale-105 duration-500 p-5 bg-gray-500 animate-pulse">
      {/* Skeleton Image */}
      <div className="w-full h-[20rem] bg-gray-400 rounded-tr-lg rounded-tl-lg"></div>
      
      {/* Skeleton Content */}
      <div className="space-y-3 p-5">
        {/* Skeleton Title */}
        <div className="h-6 bg-gray-300 rounded w-[70%]"></div>
        
        {/* Skeleton Description */}
        <div className="h-4 bg-gray-300 rounded w-[80%]"></div>
        
        {/* Skeleton Price */}
        <div className="h-4 bg-gray-300 rounded w-[50%]"></div>
        
        {/* Skeleton Availability */}
        <div className="h-4 bg-gray-300 rounded w-[60%]"></div>

        {/* Skeleton Buttons */}
        <div className="flex justify-between items-center">
          <div className="h-8 bg-gray-300 rounded w-[45%]"></div> {/* Edit Button */}
          <div className="h-8 bg-gray-300 rounded w-[45%]"></div> {/* Delete Button */}
        </div>
      </div>
    </div>
  );
};

export default Loading;
