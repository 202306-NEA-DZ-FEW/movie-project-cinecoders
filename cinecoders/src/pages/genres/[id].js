import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import MovieCard from '@/components/Card/Card';
import { fetchMoviesByGenre } from '../../util/api';
import Grid from "@mui/material/Grid" 
import Navbar from '@/components/Navbar/Navbar';

export default function GenrePage() {
  const router = useRouter();
  const { id, name } = router.query;
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    if (id) {
      // Fetch movies by genre when the component mounts
      fetchMoviesByGenre(id).then((data) => {
        if (data) {
          setMovies(data);
        }
      });
    }
  }, [id]);

  return (
    <div>
      <Navbar /> 
      <h1>Discover the best {name} movies</h1>

      <Grid
        container
        spacing={5}
        direction="row"
        justifyContent="space-evenly"
        alignItems="flex"
      >
      
        {movies.map((movie) => (
          <Grid item xs={3} key={movie.id} style={{minWidth: 300,}}>
          <MovieCard {...movie} />
          </Grid>
        ))}
      
      </Grid>
      {console.log(fetchMoviesByGenre(id))}
    </div>
  );
  
}
