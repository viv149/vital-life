import React from 'react'


export default function Counter({ title, count, varient }) {
  const colorClass = varient === "yellow" ? "text-[#E4903E]" : "text-[#07771C]";

    return (
        <div className="text-center w-full px-4 sm:px-6 md:px-8 lg:px-10">
            <h4 className={`${colorClass} text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-2`}>
                {count}
            </h4>
            <p className="text-gray-600 text-base sm:text-lg md:text-xl font-medium">
                {title}
            </p>
        </div>
    );
}

