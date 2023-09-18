import React, { useState } from 'react';
import Grid from "@mui/material/Grid"
import MovieCard from "@/components/Card/Card"
import Navbar from '@/components/Navbar/Navbar';
import Typography from '@mui/material/Typography';
import ActorCard from './actors/actorCard/Card';
import TVcard from './tvv/TVcard/TVcard';
import Link from 'next/link';



export default function Home({latestMovie,latesttv}) {
  
  const [searchQuery, setSearchQuery] = useState('');
  const [movieResults, setMovieResults] = useState([]);
  const [actorResults, setActorResults] = useState([]);
  const [tvResults, settvResults] = useState([]);

  const handleSearchChange = async (event) => {
    const query = event.target.value;

    setSearchQuery(query);

    if (query.length > 0) {
      // Fetch search results from the API based on the query
      const movieUrl = `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1`;
      const tvUrl = `https://api.themoviedb.org/3/search/tv?query=${query}&include_adult=false&language=en-US&page=1`;
      const actorUrl = `https://api.themoviedb.org/3/search/person?query=${query}&include_adult=false&language=en-US&page=1`
      const options = {
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ZjBlYzdlNWQyNjk1NGU5Yjc3MGVhNjU0Y2EzMjk5ZiIsInN1YiI6IjY1MDBmYTYwZWZlYTdhMDBmZDFiOTUyNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.8aDt5GtI-fsoy12WejvXZlqANpDVU2bfZ5gfoDmz5vw",
        },
      };

      const responseMov = await fetch(movieUrl, options);
      const dataMov = await responseMov.json();
      setMovieResults(dataMov.results);

      const responseAct = await fetch(actorUrl, options);
      const dataAct = await responseAct.json();
      setActorResults(dataAct.results);

      const responsetv = await fetch(tvUrl, options);
      const datatv = await responseMov.json();
      settvResults(datatv.results);
    } else {
      setMovieResults([]);
      setActorResults([]);
      settvResults([]);
    }
  };

  return (
    <div>
    <Navbar onSearchChange={handleSearchChange} />
    <div className="moviePage">
      <Typography
        variant="h1"
        style={{
          marginTop: "2rem",
          marginBottom: "2rem",
          textAlign: "center",
          fontSize: "5rem",
          color: "#9466c0",
        }}
      >
        Discover the latest movies
      </Typography>

      <Grid
        container
        spacing={6}
        direction="row"
        justifyContent="space-evenly"
        alignItems="flex"
        style={{ paddingLeft: '3rem', paddingRight: '3rem' }}
      >
        {searchQuery.length === 0 && (
          <div>
            {latestMovie.results.length > 0 && (
              <Grid
                container
                spacing={3}
                justifyContent="flex-start"
                alignItems="flex-start"
                marginTop="2rem"
              >
                {latestMovie.results.map((movie) => (
                  <Grid item xs={3} key={movie.id}>
                    <MovieCard {...movie} />
                  </Grid>
                ))}
              </Grid>
            )}
          </div>
        )}

        {searchQuery.length > 0 && (
          <div>
            <Typography variant="h4" textAlign="center" marginTop="3rem" marginBottom="2rem">Matching Movies</Typography>
            <Grid
              container
              spacing={3}
              justifyContent="flex-start"
              alignItems="flex-start"
              
            >
              {movieResults.map((movie) => (
                <Grid item xs={3} key={movie.id} style={{minWidth: 300,}}>
                  <MovieCard {...movie} />
                </Grid>
              ))}
            </Grid>
          </div>
        )}
        
        {searchQuery.length === 0 && (
          <div>
            {latesttv.results.length > 0 && (
              <Grid
                container
                spacing={3}
                justifyContent="flex-start"
                alignItems="flex-start"
                marginTop="2rem"
              >
                {latesttv.results.map((movie) => (
                  <Grid item xs={3} key={movie.id}>
                    <Link href={`/tvv/${movie.id}`}> <TVcard {...movie} />  </Link>
                  </Grid>
                ))}
              </Grid>
            )}
          </div>
        )}

        {searchQuery.length > 0 && (
          <div>
            <Typography variant="h4" textAlign="center" marginTop="3rem" marginBottom="2rem">Matching TV</Typography>
            <Grid
              container
              spacing={3}
              justifyContent="flex-start"
              alignItems="flex-start"
              
            >
              {tvResults.map((movie) => (
                <Grid item xs={3} key={movie.id} style={{minWidth: 300,}}>
                  <Link href={`/tvv/${movie.id}`}> <TVcard {...movie} />  </Link>
                </Grid>
              ))}
            </Grid>
          </div>
        )}
         
        {searchQuery.length > 0 && (
          <div>
            <Typography variant="h4" textAlign="center" marginTop="3rem" marginBottom="2rem">Matching Actors</Typography>
            <Grid
              container
              spacing={3}
              justifyContent="flex-start"
              alignItems="flex-start"
            >
              {actorResults.map((actor) => (
                <Grid item xs={3} key={actor.id}>
                  <ActorCard {...actor} />
                </Grid>
              ))}
            </Grid>
          </div>
        )}
      </Grid>
    </div>
  </div>
  );
  
}

export async function getStaticProps() {
  const url = "https://api.themoviedb.org/3/trending/movie/week?language=en-US"
  const url2 = "https://api.themoviedb.org/3/trending/tv/week?language=en-US"
  const options = {
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ZjBlYzdlNWQyNjk1NGU5Yjc3MGVhNjU0Y2EzMjk5ZiIsInN1YiI6IjY1MDBmYTYwZWZlYTdhMDBmZDFiOTUyNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.8aDt5GtI-fsoy12WejvXZlqANpDVU2bfZ5gfoDmz5vw",
    },
  }

  const response = await fetch(url, options)
  const data = await response.json()

  const response2 = await fetch(url2, options)
  const data2 = await response2.json()
  return {
    props: {latestMovie: data,
            latesttv: data2,},
  }
}