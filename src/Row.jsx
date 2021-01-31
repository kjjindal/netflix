import React, { useEffect, useState } from 'react';
import axios from './axios';
import './Row.css';
import Youtube from 'react-youtube';
import movieTrailer from 'movie-trailer';
const image_url=`http://image.tmdb.org/t/p/original`;
const opts={ height:"380px" , width:"100%",playerVars:{autoplay:1,}}


function Row({title,fetchurl,islarge}) {

    const [movies,setmovies]=useState([]);
    const [trailerUrl,settrailerUrl]=useState('');

  
     useEffect(()=>{

        async function fetchdata(){

            const res=await axios.get(fetchurl)

            setmovies(res.data.results);
            // console.table(res.data.results);
        
        }
        fetchdata();
     },[fetchurl])

     function handleclick(val){
       console.log(val.name);

      if(trailerUrl){
              settrailerUrl("")
      }
      else{
        movieTrailer(val?.name || " ")
        .then((url)=>{ 
          const urlParams=new URLSearchParams(new URL(url).search)
          settrailerUrl(urlParams.get('v'))
          })
        .catch((error)=>{ console.log(error) })

      }

     }
    return (
        <>
        <div className='row'>
<h2>{title} </h2>

            <div className="row__posters">
              {movies.map((val,index)=>{
       return <img key={index} onClick={()=>{ handleclick(val) }} className={islarge?"row__posterlarge":"row__poster"}  src={`${image_url}${ islarge ? val.poster_path:val.backdrop_path}`}  alt={val.name}   />
              })}
            </div>

           {trailerUrl && <Youtube  videoId={trailerUrl} opts={opts} /> }    

            
        </div>


        </>
    )

  }



  export default Row;