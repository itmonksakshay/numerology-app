import React, { useEffect, useState } from 'react'
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import backgroundImage1 from "../../assets/images/backgrounImage1.png";
import backgroundImage2 from "../../assets/images/backgroundImage2.png";
import backgroundImage3 from "../../assets/images/backgrounImage3.png";
import { styled } from '@mui/material';

const StyledWrapper = styled('div')({
  // transition: "background-image 0.1s ease-in-out",
  backgroundSize: "100% auto",
})

const Layout = () => {

  const [backgroundIndex, setBackgroundIndex] = useState(0);

  const backgroundImages = [
    `url(${backgroundImage1})`,
    `url(${backgroundImage2})`,
    `url(${backgroundImage3})`,
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      // Number of background images
      const numberOfImages = 3;
      // Height of each image section
      const imageHeight = window.innerHeight; // Adjust this if needed

      // Calculate the index based on scroll position
      const index = Math.floor((scrollTop % imageHeight) / (imageHeight / numberOfImages)) % numberOfImages;
      setBackgroundIndex(index);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <StyledWrapper style={{ backgroundImage: backgroundImages[backgroundIndex] }}>
      <Header/>
      <div className='py-16 px-[120px]'>
      <Outlet />
      </div>
      <Footer/>
    </StyledWrapper>
  )
}

export default Layout
