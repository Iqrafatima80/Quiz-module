"use client"
import React, { useState } from 'react'
import Quiz_title from '@/app/components/Quiz/Quiz_title'
import QuizQuestion from '@/app/components/Quiz/Quiz_Question_creation'


const Page = () => {
  const [questions, setQuestions] = useState([]);

  const handleAddition = () => {
    setQuestions((prevData) =>
      [...prevData, { id: prevData.length + 1, text: 'New Question' }]
    );
  };

  const handleDeletion = (id) => {
    setQuestions((prevData) =>
     prevData.filter((question) => question.id !== id)
     
     );
  };

  return (
    <div>
      <div>
        <Quiz_title />
        {questions.map((question) => (
          <QuizQuestion key={question.id} text={question.text} onDelete={() => handleDeletion(question.id)} />
        ))}
      </div>

      <div className='w-10 h-10 btn rounded-[10%] bg-primary hover:bg-indigo-500 hover:border-2
      hover:border-black 
      fixed right-4 bottom-4 flex justify-center items-center cursor-pointer'>
        <h1 className='text-white text-xl align-center font-extrabold' onClick={handleAddition}>
          +
        </h1>
      </div>
    </div>
  );
};

export default Page;
