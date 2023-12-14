import React from "react";
// import Image from "next/image";
// import Link from "next/link";
import MenuOption from "./Q_menuOption";

const QuizSidebar = () => {
  const menuOptions = [
    { icon: "list", text: "All Quizzes",path:"/Quiz" },
    { icon: "tag", text: "Attempts",path:"/Quiz/QuizesAttempts" },
    { icon: "help-circle", text: "Create new Quiz",path:"/Quiz/CreateQuiz" },
    { icon: "message-circle", text: "Your answers",path:"/Quiz/YourAnswers" },
    { icon: "heart", text: "Your Like & votes" ,path:"/Quiz/YourLikes"},
  ];

  return (
    <div className="w-[316px] shadow-2xl m-0 h-full">
      <div className="w-full flex flex-col items-start gap-[20px] py-[32px] ">
        <p className="text-slate-400 text-[12px] font-roboto font-bold px-[50px]">MENU</p>

        {menuOptions.slice(0, 2).map(({ icon, text ,path }, index) => (
          <MenuOption key={index} icon={icon} text={text} path={path} />
        ))}
      </div>

      <div className="flex flex-col items-start gap-[20px]  py-[20px]   ">
        <p className="text-slate-400 text-[12px] font-roboto font-bold  px-[50px]">PERSONAL NAVIGATOR</p>

        {menuOptions.slice(2).map(({ icon, text ,path }, index) => (
          <MenuOption key={index} icon={icon} text={text} path={path} />
        ))}
      </div>
    </div>
  );
};

export default QuizSidebar;
