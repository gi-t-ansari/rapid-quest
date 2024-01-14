import React from 'react';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import FormatListBulletedOutlinedIcon from '@mui/icons-material/FormatListBulletedOutlined';
import NewspaperOutlinedIcon from '@mui/icons-material/NewspaperOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import LogoutIcon from '@mui/icons-material/Logout';
import butterflyIcon from "../../assets/butterfly.png";
import "./Menu.css"

function Menu() {
  return (
    <>
    <div className="menu1">
        <ul className='menu-list-container'>
            <li className='menu-list butterfly menu-one'><img width={25} src={butterflyIcon} alt="butterflyIcon" /></li>
            <li className='menu-list'><SearchOutlinedIcon /></li>
        </ul>
        <ul className='menu-list-container menu-two'>
            <li className='menu-list selected'><HomeOutlinedIcon /></li>
            <li className='menu-list'><NewspaperOutlinedIcon /></li>
            <li className='menu-list'><FormatListBulletedOutlinedIcon /></li>
            <li className='menu-list'><PermIdentityOutlinedIcon /></li>
        </ul>
        <ul className='menu-list-container menu-three'>
            <li className='menu-list'><NotificationsNoneIcon/><span className='blue-dot'></span></li>
            <li className='menu-list'><LogoutIcon /></li>
        </ul>
    </div>
    <header className='menu-header'>
      <ul>
        <li className='header-list'><img width={25} src={butterflyIcon} alt="butterflyIcon" /></li>
        <li className='header-list'><NotificationsNoneIcon/><span className='blue-dot'></span></li>
      </ul>
    </header>
    <div className='menu2'>
      <ul className='menu2-list-container'>
        <li className='menu2-list'><HomeOutlinedIcon /></li>
        <li className='menu2-list'><NewspaperOutlinedIcon /></li>
        <li className='menu2-list'><FormatListBulletedOutlinedIcon /></li>
        <li className='menu2-list'><PermIdentityOutlinedIcon /></li>
        <li className='menu2-list'><SearchOutlinedIcon /></li>
      </ul>
    </div>
    </>
  )
}

export default Menu