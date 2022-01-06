import React from "react";
import { playAudio } from "../util";

const LibrarySong = ({ name,
    artist,
    cover,active,songs,setSongs,setCurrentSong,id,audioRef,isPlaying}) => {
    const songSelectHandler=()=>{
        const selectedSong =songs.filter((state)=> state.id===id);
     setCurrentSong({...selectedSong[0]});
        //Add Active State

        const newSongs =songs.map((song)=>{
            if(song.id===id){
                return {
                    ...song,
                    active:true,
                };
            } else{
                return {
                    ...song,
                    active:false,
                };
            }
        });
        setSongs(newSongs)
        playAudio(isPlaying, audioRef);
    }
    return (
        <div onClick={songSelectHandler} className={`library-song ${active ? 'selected' :""}`}>
            <img alt="" src={cover}/>
            <div className="song-desc">
            <h3>{name}</h3>
            <h4>{artist} </h4>
            </div>
        </div>
    );
};
export default LibrarySong;