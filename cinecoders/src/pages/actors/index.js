import React from "react"
import Grid from "@mui/material/Grid"
import ActorCard from "./actorCard/Card"
import Navbar from "@/components/Navbar/Navbar"

function Actor({ actorList }) {
  return (
    <div>
      <Navbar />
      <div style={{ color: "#6082B6", textAlign: "center" }}>
        <h1>Actor page</h1>
      </div>
      <br />
      <Grid
        container
        spacing={4}
        direction="row"
        justifyContent="space-evenly"
        alignItems="flex"
        margin="auto"
      >
        {actorList.results.map((actor) => {
          return (
            <Grid item xs={3} key={actor.id}>
              <ActorCard {...actor} />
            </Grid>
          )
        })}
      </Grid>
    </div>
  )
}

export default Actor

export async function getStaticProps() {
  const url = "https://api.themoviedb.org/3/person/popular"
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
      actorList: data,
    },
  }
}
