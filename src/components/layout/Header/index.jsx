import React from 'react'
import AppIcon from "../../../assets/images/appIcon.png"
import PrimaryButton from '../../atoms/Button/PrimaryButton';
import SecondaryButton from '../../atoms/Button/SecondaryButton';
const Header = () => {
  return (
    <header className="h-24 bg-blueBlack w-full items-center justify-between flex px-[120px]">
      <div className='flex '>
        <img src={AppIcon} alt='icon' />
      </div>
      <div className='flex items-center gap-[30px]'>
        <ul className='flex gap-[32px] text-white font-medium text-[15px]  leading-[18.15px]'>
          <li><a href='#'>Home</a></li>
          <li><a href='#'>About</a></li>
          <li><a href='#'>Contact</a></li>
        </ul>
        <div className='flex gap-3.5'>
          <PrimaryButton>Sign Up</PrimaryButton>
          <SecondaryButton>Sign Out</SecondaryButton>
        </div>
      </div>

    </header>
  )
}

export default Header;
