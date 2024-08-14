import React from 'react'
import { Link } from "react-router-dom";
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
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
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
