import React from 'react'
import MainImage1 from "../../assets/image3/MainImage/MainImage1.svg"
import MainImage2 from "../../assets/image3/MainImage/MainImage2.svg"
import MainImage3 from "../../assets/image3/MainImage/MainImage3.svg"
import MainImage4 from "../../assets/image3/MainImage/MainImage4.svg"
import MainImage5 from "../../assets/image3/MainImage/MainImage5.svg"
import MainImage6 from "../../assets/image3/MainImage/MainImage6.svg"
import MainImage7 from "../../assets/image3/MainImage/MainImage7.svg"
import MainImage8 from "../../assets/image3/MainImage/MainImage8.svg"
import MainImage9 from "../../assets/image3/MainImage/MainImage9.svg"

import BackgroundImage2 from "../../assets/image3/BackGroundImage/BackGroundImage2.svg"
import BackgroundImage5 from "../../assets/image3/BackGroundImage/BackGroundImage5.svg"
import BackgroundImage6 from "../../assets/image3/BackGroundImage/BackGroundImage6.svg"
import BackgroundImage7 from "../../assets/image3/BackGroundImage/BackGroundImage7.svg"
import BackgroundImage8 from "../../assets/image3/BackGroundImage/BackGroundImage8.svg"
import BackgroundImage9 from "../../assets/image3/BackGroundImage/BackGroundImage9.svg"

const TitleCard = ({item:{id,title,subtitle}}) => {

  const fgImages ={
    1:MainImage1,
    2:MainImage2,
    3:MainImage3,
    4:MainImage4,
    5:MainImage5,
    6:MainImage6,
    7:MainImage7,
    8:MainImage8,
    9:MainImage9
  }

  const bgImages = {
    1:"",
    2:BackgroundImage2,
    3:"",
    4:"",
    5:BackgroundImage5,
    6:BackgroundImage6,
    7:BackgroundImage7,
    8:BackgroundImage8,
    9:BackgroundImage9
  }
  return (
            
    <div className='bg-white  bg-no-repeat bg-right flex justify-center items-center w-[357px] h-[141px] rounded-lg' style={{backgroundImage:`url(${bgImages[id]})`,backgroundSize:"contain",}} >
        <div className='mr-1'>
        <img src={fgImages[id]}></img>
        </div>
        <div className='w-[250px] h-[89px] ml-3  align-middle' >
        <h2 className='font-bold text-[#1F1F1F] text-[18px] '>{title}</h2>
        <p className='font-normal text-[#1F1F1F] text-[15px]  leading-[24px] w-[200px]'>{subtitle} </p>
        </div>    
    </div>

  )
}

export default TitleCard

