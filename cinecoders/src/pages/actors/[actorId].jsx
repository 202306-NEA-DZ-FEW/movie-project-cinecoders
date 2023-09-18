import React from "react"
import Container from "@mui/material/Container"
import Grid from "@mui/material/Grid"
import CardMedia from "@mui/material/CardMedia"
import MovieCard from "@/components/Card/Card"
import Navbar from '@/components/Navbar/Navbar'

export default function ActorPage({
  actorInfo,
  moviesPlayed,
}) {
  {/*const limitedResults = moviesPlayed.results.slice(0, 5)*/}

  const genderSet = () => {
    if (actorInfo.gender === 1) {return "female"}
    else return 'male'
  }

  
  return (
    <div>
      <Navbar />
    
    <div className="test">
      
      <Container style={{ height: "auto", marginTop: "5rem" }}>
      <Grid container spacing={1} style={{  alignItems:"center", margin: 'auto' }}>

  <Grid item xs={12} md={6} style={{textAlign: 'center'}}>
    <CardMedia
      component="img"
      image={`https://image.tmdb.org/t/p/w500/${actorInfo.profile_path}`}
      style={{ height: "450px", borderRadius: "20px" }}
    />
  </Grid>

  <Grid item xs={12} md={6} style={{ paddingLeft: "3rem",fontSize: "20px", height: "450px" }}>
  <div className="infoBig">
      <h1>{actorInfo.name}</h1>
    </div>
    <div className="marginTop">
      <br />
      <br />
      <ul className="ulPls">
      <li>
          <b>Gender:</b> {genderSet()}
        </li>
        <li>
          <b>Birthday:</b> {actorInfo.birthday}
        </li>
        <li>
          <b>Place of birth:</b> {actorInfo.place_of_birth}
        </li>
        <li><b>Popularity:</b> {actorInfo.popularity}</li>
        
      </ul>
    </div>
  </Grid>
  <Grid item xs={12} md={12} style={{textAlign: 'center', paddingRight: '1rem', paddingLeft: '1rem', paddingTop: '1rem'}}>
    <div className="marginTop">
      &quot;{actorInfo.biography}&quot;
    </div>
  </Grid>
</Grid>

      </Container>

     {/* <Container sx={{ height: "auto" }}>
        <h1 className="yml">This actor played in:</h1>
        <Grid container spacing={2} justifyContent="center" alignItems="center">
          {limitedResults.map((movie) => {
            return (
              <Grid item xs={12} sm={6} md={4} lg={4} xl={4} key={movie.id}>
                <MovieCard {...movie} />
              </Grid>
            )
          })}
        </Grid>
        </Container> */}
    </div>
    </div>
  )
}

export async function getServerSideProps(context) {
  const { actorId } = context.query

  const url1 = `https://api.themoviedb.org/3/person/${actorId}?language=en-US`
  const url2 = `https://api.themoviedb.org/3/person/${actorId}/movie_credits?language=en-US`

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ZjBlYzdlNWQyNjk1NGU5Yjc3MGVhNjU0Y2EzMjk5ZiIsInN1YiI6IjY1MDBmYTYwZWZlYTdhMDBmZDFiOTUyNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.8aDt5GtI-fsoy12WejvXZlqANpDVU2bfZ5gfoDmz5vw",
    },
  }

  const response1 = await fetch(url1, options)
  const data1 = await response1.json()

  const response2 = await fetch(url2, options)
  const data2 = await response2.json()


  return {
    props: {
      actorInfo: data1,
      moviesPlayed: data2,
    },
  }
}
