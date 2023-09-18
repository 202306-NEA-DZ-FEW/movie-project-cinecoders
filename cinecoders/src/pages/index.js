import React, { useState } from 'react';
import Grid from "@mui/material/Grid"
import MovieCard from "@/components/Card/Card"
import Navbar from '@/components/Navbar/Navbar';
import Typography from '@mui/material/Typography';




export default function Home({latestMovie}) {
  
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearchChange = async (event) => {
    const query = event.target.value;

    setSearchQuery(query);

    if (query.length > 0) {
      // Fetch search results from the API based on the query
      const url = `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1`;
      const options = {
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ZjBlYzdlNWQyNjk1NGU5Yjc3MGVhNjU0Y2EzMjk5ZiIsInN1YiI6IjY1MDBmYTYwZWZlYTdhMDBmZDFiOTUyNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.8aDt5GtI-fsoy12WejvXZlqANpDVU2bfZ5gfoDmz5vw",
        },
      };

      const response = await fetch(url, options);
      const data = await response.json();
      setSearchResults(data.results);
    } else {
      setSearchResults([]);
    }
  };

  return (
    <div>
    <Navbar onSearchChange={handleSearchChange} />
<div className="moviePage">
  <Typography variant="h1" 
  style={{marginTop: "2rem", marginBottom: "2rem",
  textAlign: 'center',  fontSize:'5rem',
  color: '#9466c0'}}>
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
{searchQuery.length === 0
            ? latestMovie.results.map((movie) => (
                <Grid item xs={3} key={movie.id}>
                  <MovieCard {...movie} />
                </Grid>
              ))
            : searchResults.map((movie) => (
                <Grid item xs={3} key={movie.id}>
                  <MovieCard {...movie} />
                </Grid>
              ))}
</Grid>
</div>
</div>
  );
  
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