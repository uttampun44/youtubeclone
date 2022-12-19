import React from 'react'
import Header from '../Header/Header'
import Sidebar from '../sidebar/Sidebar'
import Videocontent from '../Videocontent/Videocontent'
import  './Main sass/Main.css';

function Main() {
  return (
    <div>
        <div className='sidebar'>
             <div className='youtube-header'>
                  <Header />
             </div>

             <div className='main-content-section-sidebar'>
                 <Sidebar />
                 <Videocontent />
             </div>
        </div>
    </div>
  )
}

export default Main
