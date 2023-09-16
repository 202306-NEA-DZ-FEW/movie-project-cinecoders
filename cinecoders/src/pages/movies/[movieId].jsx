import React from "react"
import Container from "@mui/material/Container"
import Grid from "@mui/material/Grid"
import CardMedia from "@mui/material/CardMedia"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import Typography from "@mui/material/Typography"
import MovieCard from "@/components/Card/Card"
import Trailer from "@/components/Trailer/Trailer"
import Navbar from '@/components/Navbar/Navbar'

export default function MoviePage({
  movieData,
  movieCredits,
  similarMovies,
  trailerMovie,
}) {
  const limitedResults = similarMovies.results.slice(0, 5)

  return (
    <div>
      <Navbar />
    
    <div className="test">
      <div className="infoBig">
        <h1>{movieData.title}</h1>
        <p>{movieData.tagline}</p>
      </div>
      <Container style={{ height: "auto" }}>
        <Grid container spacing={1}>
          <Grid item xs={12} md={6}>
            <div className="marginTop">
              &quot;{movieData.overview}&quot;
              <br />
              <br />
              <ul>
                <li>
                  <b>Release Date:</b> {movieData.release_date}
                </li>
                <li>
                  <b>Runtime:</b> {movieData.runtime} min.
                </li>
                <li>
                  <b>Genres:</b>{" "}
                  {movieData.genres[0] && movieData.genres[0].name},{" "}
                  {movieData.genres[1] && movieData.genres[1].name},{" "}
                  {movieData.genres[2] && movieData.genres[2].name}
                </li>
                <li>
                  <b>Director:</b> {movieCredits["crew"][0]["name"]}
                </li>
                <li>
                  <b>Line-up:</b> {movieCredits["cast"][0]["name"]},{" "}
                  {movieCredits["cast"][1]["name"]},{" "}
                  {movieCredits["cast"][2]["name"]},{" "}
                  {movieCredits["cast"][3]["name"]},{" "}
                  {movieCredits["cast"][4]["name"]}
                </li>
                <li>
                  <b>Language:</b> {movieData.spoken_languages[0].english_name}
                </li>
                <li>
                  <b>Vote average:</b> {movieData.vote_average} (
                  {movieData.vote_count} votes)
                </li>
                <li>
                  <b>Productions:</b>
                </li>
              </ul>
              <Grid container spacing={1}>
                {movieData.production_companies.map((company) => (
                  <Grid item xs key={company.id}>
                    <br />
                    <CardMedia
                      component="img"
                      src={`https://image.tmdb.org/t/p/w500${company.logo_path}`}
                      style={{ height: "15%", width: "55%" }}
                    />
                    <CardContent>
                      <Typography style={{ fontSize: "12px" }}>
                        {company.name}
                      </Typography>
                    </CardContent>
                  </Grid>
                ))}
              </Grid>
            </div>

            <Trailer trailers={trailerMovie.results} />
          </Grid>

          <Grid item xs={12} md={6}>
            <CardMedia
              component="img"
              image={`https://image.tmdb.org/t/p/w500/${movieData.poster_path}`}
              style={{ height: "900px" }}
            />
          </Grid>
        </Grid>
      </Container>

      <Container sx={{ height: "auto" }}>
        <h1 className="yml">You might like...</h1>
        <Grid container spacing={2} justifyContent="center" alignItems="center">
          {limitedResults.map((movie) => {
            return (
              <Grid item xs={12} sm={6} md={4} lg={4} xl={4} key={movie.id}>
                <MovieCard {...movie} />
              </Grid>
            )
          })}
        </Grid>
      </Container>
    </div>
    </div>
  )
}

export async function getServerSideProps(context) {
  const { movieId } = context.query

  const url1 = `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`
  const url2 = `https://api.themoviedb.org/3/movie/${movieId}/credits?language=en-US`
  const url3 = `https://api.themoviedb.org/3/movie/${movieId}/similar?language=en-US&page=1`
  const url4 = `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`

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
  // console.log('movieCredits:', data2);

  const response3 = await fetch(url3, options)
  const data3 = await response3.json()

  const response4 = await fetch(url4, options)
  const data4 = await response4.json()

  return {
    props: {
      movieData: data1,
      movieCredits: data2,
      similarMovies: data3,
      trailerMovie: data4,
    },
  }
}
