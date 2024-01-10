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
    <div className="menu">
        <ul className='menu-list-container'>
            <li className='menu-list butterfly'><img width={25} src={butterflyIcon} alt="butterflyIcon" /></li>
            <li className='menu-list'><SearchOutlinedIcon /></li>
        </ul>
        <ul className='menu-list-container second-menu'>
            <li className='menu-list selected'><HomeOutlinedIcon /></li>
            <li className='menu-list'><NewspaperOutlinedIcon /></li>
            <li className='menu-list'><FormatListBulletedOutlinedIcon /></li>
            <li className='menu-list'><PermIdentityOutlinedIcon /></li>
        </ul>
        <ul className='menu-list-container'>
            <li className='menu-list'><NotificationsNoneIcon/></li>
            <li className='menu-list'><LogoutIcon /></li>
        </ul>
    </div>
  )
}

export default Menu