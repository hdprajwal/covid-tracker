import React from 'react';

function DetailsCard({ title, value }) {
  return (
    <div className="bg-gray-100 dark:text-gray-100 dark:bg-gray-800 shadow-lg p-8 w-1/3 h-40 rounded-md flex flex-col justify-between">
      <div className="text-center text-lg ">{title}</div>
      <div className="text-center text-3xl">{value}</div>
    </div>
  );
}

export default DetailsCard;
