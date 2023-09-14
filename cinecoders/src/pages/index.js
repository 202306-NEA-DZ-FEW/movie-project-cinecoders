//import Navbar from '@/component/Navbar/Navbar'
import React from "react"
import Grid from "@mui/material/Grid"
import MovieCard from "@/components/Card/Card"

export default function Homepage({ latestMovie }) {
  return (
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
