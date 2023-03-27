import React from "react";

export function SkeletonLoader() {
  return (
    <div className="flex animate-pulse flex-col space-y-4 py-4">
      <div className="h-4 w-3/4 rounded bg-gray-500"></div>
      <div className="h-4 w-1/2 rounded bg-gray-500"></div>
      <div className="h-4 w-2/3 rounded bg-gray-500"></div>
      <div className="h-4 w-3/4 rounded bg-gray-500"></div>
      <div className="h-4 w-1/2 rounded bg-gray-500"></div>
      <div className="h-4 w-2/3 rounded bg-gray-500"></div>
    </div>
  );
}
