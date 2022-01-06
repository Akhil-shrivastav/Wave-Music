import React, {useState,useRef} from 'react';
import Player from './components/player';
import Song from './components/song';
import chillHop from './data'
import './style/app.scss' ;
import Library from './components/Library';
import Nav from './components/nav';
import { playAudio } from "./util";
function App() {
   //Ref
   const audioRef= useRef(null);
  const [songs,setSongs] =useState(chillHop());
  const [currentSong, setCurrentSong]=useState(songs[0]);
  const [isPlaying,setIsPlaying] = useState(false);

const [songInfo, setSongInfo]= useState({
  currentTime:0,
  duration:0
});
const [libraryStatus,setLibraryStatus]=useState(false);

const timeUpdateHandler =(e)=>{
  const current =e.target.currentTime;
  const duration =e.target.duration;
  setSongInfo({...songInfo,currentTime:current, duration:duration})
};
 const songEndHandler = async ()=>{
  let currentIndex=songs.findIndex((song) =>song.id===currentSong.id);
  
  await setCurrentSong(songs[(currentIndex+1)%songs.length]);
  playAudio(isPlaying, audioRef);
  return;
 };
  return (
    <div className={`App ${libraryStatus ? 'library-active' :""}`}>
      <Nav libraryStatus={libraryStatus}
           setLibraryStatus={setLibraryStatus}/>
      <Song isPlaying={isPlaying} currentSong={currentSong}/>
      <Player audioRef={audioRef}
              setIsPlaying={setIsPlaying}
              isPlaying={isPlaying} 
              songs={songs} 
              setCurrentSong={setCurrentSong}
              currentSong={currentSong} 
              setSongs={setSongs}
              setSongInfo={setSongInfo} 
              songInfo={songInfo}/>
      <Library audioRef={audioRef} 
              libraryStatus={libraryStatus}
              songs={songs}    
              setSongs={setSongs}
             setCurrentSong={setCurrentSong} 
              isPlaying={isPlaying}/>
      <audio 
            onTimeUpdate= {timeUpdateHandler} 
            onLoadedMetadata={timeUpdateHandler}
             ref={audioRef}
              onEnded={songEndHandler}
              src={currentSong.audio}></audio>
       </div>
  );
}

export default App;
