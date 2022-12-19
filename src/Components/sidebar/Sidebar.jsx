import React from 'react'
import CottageIcon from '@mui/icons-material/Cottage';
import AppShortcutIcon from '@mui/icons-material/AppShortcut';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import HistoryIcon from '@mui/icons-material/History';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import SettingsIcon from '@mui/icons-material/Settings';
import FlagIcon from '@mui/icons-material/Flag';
import HelpIcon from '@mui/icons-material/Help';
import FeedbackIcon from '@mui/icons-material/Feedback';
import './sidebar sass/Sidebar.css'
import { Link, Outlet } from 'react-router-dom';


function Sidebar() {
 
  return (
    <div className='sidebar-menu'>
            <div className='scroll-menu'>
            <div className='home-shorts-subscription'>
            <Link to='/'><CottageIcon className=' sidebarmenu'/><span>Home</span></Link>
            <Link to='/shorts'><AppShortcutIcon className=' sidebarmenu'/>Shorts</Link>
            <Link to='/subscripton'><SubscriptionsIcon className=' sidebarmenu' id='#subscription'/><span>Subscriptions</span></Link>
            <hr></hr>
            <Outlet/>
        </div>

        <div className='library-history-watch'>
                <Link to='/'><VideoLibraryIcon className=' sidebarmenu'/><span>Home</span></Link>
               <Link to='/shorts'><HistoryIcon className=' sidebarmenu'/>Shorts</Link>
               <Link to='/subscripton'><WatchLaterIcon className=' sidebarmenu' /><span>Subscriptions</span></Link>
               <Link to='/subscripton'><ThumbUpIcon className=' sidebarmenu' /><span>Subscriptions</span></Link>
               <hr></hr>
              <Outlet/>
        </div>

        <div className='library-history-watch'>
            <h1>Explore</h1>
            <Link to='/'><WhatshotIcon className=' sidebarmenu'/><span>Trending</span></Link>
             <Link to='/shorts'><MusicNoteIcon className=' sidebarmenu'/>Music</Link>
             <Link to='/subscripton'><SportsEsportsIcon className=' sidebarmenu' /><span>Gaming</span></Link>
             <Link to='/subscripton'><EmojiEventsIcon className=' sidebarmenu' /><span>Sports</span></Link>
             <hr></hr>
         <Outlet/>
        </div>
            
        <div className='library-history-watch'>
            <h1>More From Youtube</h1>
                <Link to='/'><WhatshotIcon className=' sidebarmenu'/><span>Trending</span></Link>
                <Link to='/shorts'><MusicNoteIcon className=' sidebarmenu'/>Music</Link>
                <Link to='/subscripton'><SportsEsportsIcon className=' sidebarmenu' /><span>Gaming</span></Link>
                <Link to='/subscripton'><EmojiEventsIcon className=' sidebarmenu' /><span>Sports</span></Link>
                <hr></hr>
                <Outlet/>
         </div>

          <div className='library-history-watch'>
                   <Link to='/'><SettingsIcon className=' sidebarmenu'/><span>Creator Studio</span></Link>
                    <Link to='/shorts'><HistoryIcon className=' sidebarmenu'/>Youtube Music</Link>
                    <Link to='/subscripton'><WatchLaterIcon className=' sidebarmenu' /><span>Youtube Kids</span></Link>
                     <Link to='/subscripton'><ThumbUpIcon className=' sidebarmenu' /><span>Youtube Tv</span></Link>
               <hr></hr>
               <Outlet/>
            </div>

            <div className='library-history-watch'>
                    <Link to='/'><SettingsIcon className=' sidebarmenu'/><span>Settings</span></Link>
                    <Link to='/shorts'><FlagIcon className=' sidebarmenu'/>History</Link>
                   <Link to='/subscripton'><HelpIcon className=' sidebarmenu' /><span>Help</span></Link>
                   <Link to='/subscripton'><FeedbackIcon className=' sidebarmenu' /><span>Send Feedback</span></Link>
                   <hr></hr>
                <Outlet/>
             </div>
            </div>
      </div>
  )
}

export default Sidebar
