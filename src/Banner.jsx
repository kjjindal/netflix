import React, { useEffect, useState } from 'react';
import axios from './axios';
import request from './Requests';
import './Banner.css';




function Banner(){

    const [movie,setmovie]=useState([]);

    useEffect(()=>{
        async function fetchdata (){
const res=await axios.get(request.fetchNetflixOriginals);
setmovie(res.data.results[Math.floor(Math.random()*res.data.results.length)]);
return res
        }
        fetchdata();
    },[])

    function truncate(source, size) {
  return source?.length > size ? source?.slice(0, size - 1) + "…" : source;
}
    return (
        <>
        <header className="banner"   style={{ background:`url(http://image.tmdb.org/t/p/original${movie?.backdrop_path})` , backgroundSize:'cover' ,backgroundPosition:'center' }}  > 
        <div className="banner__contents">
        <h1 className="banner__title"> {movie?.title || movie?.name || movie?.original_name}   </h1>
        <div className="banner__buttons">
        <button  className="banner__button">Play</button>
        <button  className="banner__button">My List</button>
        </div>
        <h3 className="banner__description">{truncate(movie?.overview,150)}</h3>

        </div>
        <div className="banner__fadebottom"  />

        </header>



        </>
    )
}

export default Banner;