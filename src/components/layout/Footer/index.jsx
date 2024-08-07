import React from 'react'
import starIcon from '../../../assets/images/starIcon.png'
import LineIcon from "../../../assets/images/LineIcon.png"
import SocialIcons from "../../../assets/images/socialIcons.png"
const Footer = () => {
  return (
    <footer className=' w-full h-[354px] bg-gradient-0 absolute top-full flex flex-col items-center gap-[42px] py-[50px]'>
      <div class="">
        <img src={starIcon} alt='star' />
      </div>
      <div class="text-white font-medium text-[16px]  leading-[19.36px]">
        Thần Số Học chỉ là một công cụ để thấu hiểu thêm về bản thân, chỉ nên tham khảo, không nên mắc kẹt vào các con số!
      </div>
      <div>
        <img src={LineIcon} alt='line' />
      </div>
      <div>
        <img src={SocialIcons} alt="Social" />
      </div>
    </footer>
  )
}

export default Footer;

