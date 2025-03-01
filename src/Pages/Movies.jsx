import React, { useEffect, useState } from 'react'
import axios from 'axios';
import style from '../Component/card.module.css'
import { Card } from '../Component/Card';
import { moviesData } from '../Services/GetMoviesData';

function Movies() {
    const [movie ,setMovie]= useState([])

    // const Movie_API=`https://www.omdbapi.com/?i=tt3896198&apikey=${import.meta.env.VITE_API_KEY}&s=titanic`;
    const Movie_API=`https://www.omdbapi.com/?i=tt3896198&apikey=8026880d&s=titanic`;

    const getdata = async ()=>{
        try{
            // const data=await axios.get(Movie_API)
            const data=await moviesData()
            console.log(data)
            setMovie(data.data.Search)
        }catch(error){
            console.log(error.message)
            console.log(error.response.status)
            console.log(error.response.data)
        } 
    }
    useEffect(()=>{
        getdata()
    },[])
  return (
    <div >
          <ul className={style.cardLayout} >
            {
              movie.map((curr)=>{
                return <Card key={curr.imdbID} currMovie={curr} />
              })
            }
          </ul>
        </div>
  )
}
export default Movies