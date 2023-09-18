import React from 'react'
import Grid from "@mui/material/Grid"
import TVcard from './TVcard/TVcard'
import Navbar from '@/components/Navbar/Navbar'

function TVlatest ({latesttv}) {

  
  return (
    <div>
      <Navbar />
      <h1>TV page</h1>
    <br />
    <Grid
        container
        spacing={4}
        direction="row"
        justifyContent="space-evenly"
        alignItems="flex"
      >
        {latesttv.results.map((tv) => {
          return (
            <Grid item xs={3} key={tv.id}>
              <TVcard {...tv} />
            </Grid>
          )
        })}
      </Grid>
    
    </div>
  )
}

export default TVlatest

export async function getStaticProps() {
  const url = "https://api.themoviedb.org/3/trending/tv/day?language=en-US"
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
      latesttv: data,
    },
  }
}
