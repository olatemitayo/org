import React from 'react';

const PlusIcon: React.FC = () => {
  return (
    <div className="flex justify-center items-center h-6 w-6 bg-purple-500 rounded-full">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="white"
        className="h-4 w-4"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 4.5v15m7.5-7.5h-15"
        />
      </svg>
    </div>
  );
};

export default PlusIcon;
