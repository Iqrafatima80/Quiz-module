"use client"
import React, { useState } from 'react';

const QuizQuestion = ({key,text,onDelete}) => {

    const [quizData, setQuizData] = useState({
        question: '',
        options: ['', '', '', ''],
        correctOption: null,
      });      
      const handleOptionChange = (index, value) => {
        setQuizData((prevData) => ({
          ...prevData,
          options: prevData.options.map((option, i) => (i === index ? value : option)),
        }));
      };      
      const handleAddOption = () => {
        if(quizData.options.length==4)
        {
            alert("You can't Add More than four options")
            return;
        }
        setQuizData((prevData) => ({
          ...prevData,
          options: [...prevData.options, ''],
        }));
      };      
      const handleRemoveOption = (index) => {
        if(quizData.options.length==2)
        {
            alert("You can't Delete More options,there should be at least 2 options")
            return;
        }
        setQuizData((prevData) => ({
          ...prevData,
          options: prevData.options.filter((option, i) => i !== index)
          ,
        }));
        if(quizData.correctOption===index)
        {
            setQuizData((prevData) => ({
                ...prevData,
                correctOption:null,
            }))
        }
      };      
      const handleCorrectOption = (index) => {
        setQuizData((prevData) => ({
          ...prevData,
          correctOption: index,
        }));
      };
      return (
        <div className="w-full mx-auto px-20 py-10 bg-indigo-100 m-6">
          <form className="space-y-4 relative">
            <div className="Question--header flex flex-row justify-between items-center">
              <div>
                <span className="font-extrabold text-gray-600 text-2xl mr-2">:::</span>
                <span className="font-extrabold text-gray-600 text-2xl">Question </span>
              </div>
              <div className="text-[40px] font-extrabold rotate-45 cursor-pointer" onClick={onDelete}>
                +
              </div>
            </div>
            <input
              type="text"
              value={quizData.question}
              onChange={(e) => setQuizData((prevData) => ({ ...prevData, question: e.target.value }))}
              placeholder={text}
              className="w-full p-2 rounded border-none focus:outline-primary"
            />
      
            {quizData.options.map((option, index) => (
              <div key={index} className="flex flex-row item-start items-center  rounded w-full">
                <label className="flex flex-row items-center mr-8">
                  <h1 className="font-extrabold text-gray-600 text-2xl mr-2 pb-1">::</h1>
                  <h1 className="text-lg font-extrabold  ">{index + 1}</h1>
                </label>
      
                <div className="flex flex-row justify-between w-full bg-white">
                  <input
                    type="text"
                    value={option}
                    onChange={(e) => handleOptionChange(index, e.target.value)}
                    placeholder="Enter Options here"
                    className="block w-full mt-1 p-2 border-none rounded outline-none"
                  />
      
                  <div className="flex flex-row  justify-end">
                    <button
                      type="button"
                      onClick={() => handleCorrectOption(index)}
                      className={`
                      ${quizData.correctOption===index? 
                    " border-black bg-green-400 hover:bg-green-400 ":" border-green-200  hover:bg-green-300" }
                    bg-green-200 text-white w-[40px] h-full border-2`}
                    >
                      ✔
                    </button>
      
                    <button
                      type="button"
                      onClick={() => handleRemoveOption(index)}
                      className="bg-red-200 text-black font-extrabold  text-lg w-[40px] h-full hover:bg-red-400"
                    >
                      𐄂
                    </button>
                  </div>
                </div>
              </div>
            ))}

        <div className='flex w-full justify-end'>
            <button
              type="button"
              onClick={handleAddOption}
              className="text-primary font-extrabold 
                rounded flex justify-end"
            >
              Add Option
            </button>
            </div>

          </form>
        </div>
      );
      
};

export default QuizQuestion;
