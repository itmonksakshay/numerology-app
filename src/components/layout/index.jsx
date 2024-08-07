import React from "react";
import backgroundImage1 from "../../assets/images/backgrounImage1.png";
import backgroundImage2 from "../../assets/images/backgroundImage2.png";
import backgroundImage3 from "../../assets/images/backgrounImage3.png";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div className="w-full relative">
      <Header />
      <div className="absolute w-full z-0">
        <img src={backgroundImage1} className="w-full mt-[-5px]"  />
        <img src={backgroundImage2} className="w-full mt-[-5px]"  />
        <img src={backgroundImage3} className="w-full mt-[-5px]"  />
        <img src={backgroundImage1} className="w-full mt-[-5px]"  />
        <img src={backgroundImage2} className="w-full mt-[-5px]"  />
        <img src={backgroundImage3} className="w-full mt-[-5px]"  />
        <img src={backgroundImage1} className="w-full mt-[-5px]"  />
        <img src={backgroundImage2} className="w-full mt-[-5px]"  />
        <img src={backgroundImage3} className="w-full mt-[-5px]"  />
        <Footer />
      </div>
      <div className="px-[120px] py-[84px] w-full">{children}</div>
    </div>
  );
};

export default Layout;
