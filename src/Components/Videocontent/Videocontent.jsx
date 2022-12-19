import Videocard from './Videodata'
import './Videocontent sass/videocontent.css'


function Videocontent() {
  
  
  return (
    <div className='video-content'>
           <div className='video-gallery'>
             {
            Videocard.map((youtube) =>{
                return(
             <div className='youtube-thumbnail' key={youtube.id}>
                <img src={youtube.VideoThumbnail} width='100%' height='20%' />
                
                <div className='youtube-thumbnail-title'>
                     <h3>{youtube.Title}</h3>
                     <p>{youtube.ChannelName}</p>
                    <div className='channel-views-time'>
                        <p>{youtube.Views}</p> <span>.</span><p>{youtube.Time}</p>
                     </div>
            </div>
                      
                </div>
                )
              })
             }
           </div>
    </div>
  )
}

export default Videocontent;
