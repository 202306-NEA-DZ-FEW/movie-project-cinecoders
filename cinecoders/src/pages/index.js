//import Navbar from '@/component/Navbar/Navbar'
import React from "react"
import Grid from "@mui/material/Grid"
import MovieCard from "@/components/Card/Card"
import Movie from "@/pages/movie"
import SubMenuDropdown from "@/pages/api/SubMenuDropdown"
import MenuItem from "@/pages/api/MenuItem"
import styles from "@/styles/Menu.module.css"
// import SubMenuDropdown from "@/pages/api/SubMenuDropdown"
import { useState, useEffect } from 'react'
export default function Homepage({ latestMovie }) {
  const [selectedMovie, setSelectedMovie] = useState(' ');
const menu_item=[

  {title: "Home"},  
  {
    title: "Genre",
   submenu: [{title: "Thriller"}]
  },
   {title: "Filter",
   submenu: [
    {title: "Top Rated"},
    {title: "Popular"},
    {title: "Latest"},
    {title: "Now Playing"},
    {title: "Upcoming"}
  ]},
  {title: "Actors"},
  {title: "Search"},
]
  // const handleMovieType = (movieType) => {
  //   setSelectedMovie(movieType);
  // };
  
  return (
    <>
    <div className={styles.header}>
      <ul>
        {menu_item.map((item,index)=> {
          return <MenuItem item={item} key={index} depth={1} />
        })}
      </ul>
      </div>
     {/* <button onClick={() => handleMovieType('Top Rated')}>Top Rated</button>
     <button onClick={() => handleMovieType('Popular')}>Popular</button>
     <button onClick={() => handleMovieType('Latest')}>Latest</button>
     <button onClick={() => handleMovieType('Now Playing')}>Now Playing</button>
    <button onClick={() => handleMovieType('Upcoming')}>Upcoming</button>
     
   <Movie movieType={selectedMovie} />
  */}
     
       <div className="moviePage">
        
      <h1 className="bigTitle">Discover the latest movies</h1>
      

      <Grid
        container
        spacing={4}
        direction="row"
        justifyContent="space-evenly"
        alignItems="flex"
      >
        
        {latestMovie.results.map((movie) => {
          
          return (
            <Grid item xs={4} key={movie.id}>
              <MovieCard {...movie} />
            </Grid>
          )

        })}
      </Grid>
    </div>
    </>
  )
}

export async function getStaticProps() {
  const url = "https://api.themoviedb.org/3/trending/movie/week?language=en-US"
  const options = {
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ZjBlYzdlNWQyNjk1NGU5Yjc3MGVhNjU0Y2EzMjk5ZiIsInN1YiI6IjY1MDBmYTYwZWZlYTdhMDBmZDFiOTUyNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.8aDt5GtI-fsoy12WejvXZlqANpDVU2bfZ5gfoDmz5vw",
    },
  }

  const response = await fetch(url, options)
  const data = await response.json()

  return {
    props: {
      latestMovie: data,
    },
  }
}
