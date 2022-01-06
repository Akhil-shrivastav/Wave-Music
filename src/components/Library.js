import React from "react";
import LibrarySong from "./LibrarySong";

const Library= ({songs,setCurrentSong,audioRef,setSongs,libraryStatus, isPlaying})=>{
    return(
          <div className={`library ${libraryStatus ? 'active-library' :''}`}>
            <h2>Library</h2>
            <div className="library-song">
                {songs.map((song)=>(
                <LibrarySong 
                songs={songs}
                cover={song.cover}
                name={song.name}
                artist={song.artist}
                active={song.active}
                setSongs={setSongs}
                setCurrentSong={setCurrentSong} 
                 song={song} id={song.id}
                key={song.id}
                 isPlaying={isPlaying}
                 audioRef={audioRef}
                />
))}
            </div>
        </div>
    )
};

export default Library;