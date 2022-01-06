import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic } from "@fortawesome/free-solid-svg-icons";

const Nav = ({libraryStatus,setLibraryStatus})=>{
return (
    <nav onClick={()=> setLibraryStatus(!libraryStatus)}>
        <h1>Waves </h1>
        <button>Library
            <FontAwesomeIcon icon={faMusic}/>
        </button>
    </nav>
);
};

export default Nav;