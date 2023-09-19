import React from "react"
import Grid from "@mui/material/Grid"
import MovieCard from "@/components/Card/Card"
import Navbar from "@/components/Navbar/Navbar"

export default function Toprate({ toprateMov }) {
  return (
    <div>
      <Navbar />
      <div className="moviePage">
        <div style={{ color: "#6082B6", textAlign: "center" }}>
          <h1 className="bigTitle">Discover our top rated movies</h1>
        </div>
        <Grid
          container
          spacing={3}
          direction="row"
          justifyContent="space-evenly"
          alignItems="flex"
          style={{ paddingLeft: "3rem", paddingRight: "2rem" }}
        >
          {toprateMov.results.map((movie) => {
            return (
              <Grid item xs={3} key={movie.id}>
                <MovieCard {...movie} />
              </Grid>
            )
          })}
        </Grid>
      </div>
    </div>
  )
}

export async function getStaticProps() {
  const url = "https://api.themoviedb.org/3/movie/top_rated?language=en-US"
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
      toprateMov: data,
    },
  }
}
