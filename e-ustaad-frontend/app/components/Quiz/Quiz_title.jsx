"use client"
import React, { useState } from 'react';

const Quiz_title = () => {
  const [inputValue, setInputValue] = useState('');


  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <form name="myForm">
    <div className="mb-4">
      <input
        className="h-12 border-2 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-primary focus:bg-none  bg-indigo-100 border-indigo-100 text-lg font-extrabold placeholder-gray-500"
  
        id="myInput"
        type="text"
        placeholder="Enter Title of Quiz"
        value={inputValue}
        onChange={handleChange}
      />
    </div>
  </form>
  
  );
};

export default  Quiz_title;
