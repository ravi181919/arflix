import React from "react";

const Loading = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <div className="flex space-x-1 items-end justify-center animate-pulse">
      <h1 className="font-bold w-fit text-5xl">
          Loading
        </h1>
      <div className="flex space-x-1 mb-2">
      <div className="w-4 h-4 bg-red-600 rounded-full"></div>
        <div className="w-4 h-4 bg-yellow-500 rounded-full"></div>
        <div className="w-4 h-4 bg-green-500 rounded-full"></div>
      </div>
      </div>
    </div>
  );
};

export default Loading;
