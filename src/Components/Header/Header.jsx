import React, { useEffect, useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import Headerlogo from '/assets/images/YouTube-Logo.png';
import SearchIcon from '@mui/icons-material/Search';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MicIcon from '@mui/icons-material/Mic';
import './Header Sass/Header.css';
import Sidebar from '../sidebar/Sidebar';

function Header() {
     const [videosearch, setSearch] = useState();
     const [videodata, setData] = useState("")    
     const videoSearch = (e) =>{
     //     user input search
          setSearch(e.target.value);
         console.log(videosearch);

     //     video data
         setData(e.target.value);
     }
      
//    Darkmode on
     const DarkModeOn = () =>{
        let body =   document.body.style.background = '#000';
        let colors = document.querySelector('.main-content-section-sidebar');
        colors.style.color = '#fff';

         let bodystyle = [body, colors];

         if(bodystyle){
          return true;
         }
     }
   
     // darkmode off
     const DarkModeOff = () =>{
          document.body.style.background = '#fff';
          let colors = document.querySelector('.main-content-section-sidebar');
        colors.style.color = '#000';
     }

  return (
    <div className='header'>
      <header id='header'>
         <nav>
            <div className='header-section'>
             
                 <div className='icon-logo'>
                     <MenuIcon/>
                     <img src={Headerlogo} alt=''/>
                  </div>
               
                  <div className='search-bar'>
                      <div className='search-icon'>
                       <input type='text' placeholder='Search' onChange={videoSearch} value={videodata}/>
                       <SearchIcon className='searchicon'/>
                  </div>
                   
                    <div className='mic-icon'>
                         <MicIcon className='mic'/>
                    </div>
                   </div>

                 <div className='notification-bell'>
                       <div className='darkmode-section'>
                          <ul>
                             <li><span className='darkmode'>Dark Mode</span> &nbsp;
                                  <ul className='darkmode-option'>
                                     <li><span id='on' onClick={DarkModeOn}>on</span></li>
                                     <li><span id='off' onClick={DarkModeOff}>off</span></li>
                                  </ul>
                             </li>
                          </ul>
                       </div>
                     <VideoCallIcon className='video-call-icon'/>
                     <NotificationsIcon className='video-call-icon'/>
                     <AccountCircleIcon className='video-call-icon'/>
                 </div>
            </div>
         </nav>
    </header>
    </div>
  )
}

export default Header
