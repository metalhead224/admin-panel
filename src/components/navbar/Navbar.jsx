import React from 'react'
import './navbar.scss'
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import LanguageIcon from '@mui/icons-material/Language';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import ZoomInMapIcon from '@mui/icons-material/ZoomInMap';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import ListIcon from '@mui/icons-material/List';

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='wrapper'>
        <div className='search'>
          <input type='text' placeholder='Search...' />
          <SearchOutlinedIcon className='icon'/>
        </div>
        <div className='items'>
          <div className='item'>
            <LanguageIcon className='icon'/>
            English
          </div>
          <div className='item'>
            <DarkModeIcon className='icon'/>
          </div>
          <div className='item'>
            <ZoomInMapIcon className='icon'/>
          </div>
          <div className='item'>
            <NotificationsNoneIcon className='icon'/>
            <div className='counter'>1</div>
          </div>
          <div className='item'>
            <ChatBubbleOutlineIcon className='icon'/>
            <div className='counter'>2</div>
          </div>
          <div className='item'>
            <ListIcon className='icon'/>
          </div>
          <div className='item'>
            <img
            src='https://picsum.photos/200'
            alt='eg'
            className='avatar'
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar