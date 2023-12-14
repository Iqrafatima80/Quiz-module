import React from "react";
import QuizSidebar from "../components/Quiz/QuizSidebar";

const layout = ({ children }) => {
  return (
    <div className="flex flex-row h-full">
        <QuizSidebar />
      <div className="flex flex-col p-10 h-full w-full overflow-auto">{children}</div>
    </div>
  );
};

export default layout;
