import React from 'react';


const ContentCard = ({ title, children, className }) => {


  return (
    <div
      className={`bg-no-repeat bg-right flex flex-col justify-center items-center min-w-[357px] h-[175px] rounded-lg ${className}`}
    >
      <div className="flex flex-col justify-center items-center gap-4 px-4">
          {title && <p className="font-semibold text-[#1F1F1F] text-[16px] leading-[19.36px]  ">{title}</p>}
        {children}
      </div>
    </div>
  );
};

export default ContentCard;