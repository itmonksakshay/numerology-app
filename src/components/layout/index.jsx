import React from "react";
import backgroundImage1 from "../../assets/images/backgrounImage1.png";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <div className="w-full">
       <Header/>
      <div className="relative w-full">
        <img src={backgroundImage1} className="absolute w-full z-0" />
        <div className="px-[120px] py-[84px] absolute">{children}</div>
      </div>
      <div>Footer</div>
    </div>
  );
};

export default Layout;
