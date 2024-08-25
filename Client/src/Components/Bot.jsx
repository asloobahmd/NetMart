import React from "react";

import { IoChatbubbleEllipses } from "react-icons/io5";

const Bot = () => {
  return (
    <div className="fixed bottom-5 right-4 z-[999] cursor-pointer text-white text-4xl bg-black w-14 h-14 flex items-center justify-center rounded-full animate-bounce">
      <a href="#" target="">
        <IoChatbubbleEllipses />
      </a>
    </div>
  );
};

export default Bot;
