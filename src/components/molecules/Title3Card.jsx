import React from 'react';


const Title3Card = ({ title, children, src, className }) => {


  return (
    <div className={`w-[540px] h-[205px] rounded-lg ${className}`} >
      <div className="flex items-start gap-2">
        <img src={src}  />
        {title && <h2 className="text-[18px] font-semibold text-[#000000] leading-[21.78px]">{title}</h2>}
      </div>
      <div className="flex flex-col pl-[34px]  ">
        <ul>
          <li className="text-[15px] font-normal  text-[#000000] leading-[26px]">
            <a>{children}</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Title3Card;

