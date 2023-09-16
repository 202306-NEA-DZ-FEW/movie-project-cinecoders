import React, { useState, useEffect } from "react";
import MovieCard from "@/components/Card/Card";

function Movie({ movieType }) {
  const [movie, setMovie] = useState([]);

  const apiMovies = {
    "Top Rated":
      "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
    "Popular":
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
    "Latest": "https://api.themoviedb.org/3/movie/latest",
    "Now Playing":
      "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
    "Upcoming":
      "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
  };

  const fetchMovies = async () => {
    const movieUrl = apiMovies[movieType];
    const response = await fetch(movieUrl);
    const data = await response.json();
    setMovie((prevMovies) => [...prevMovies, ...data.results]);
  };

  useEffect(() => {
    fetchMovies();
  }, [movieType]);

  const movieList = movie.map((movie) => (
    <MovieCard key={movie.id} movie={movie} />
  ));

  return (
    <div>
      <h2>{movieType} Movies</h2>
      <div className="movie-list">{movieList}</div>
    </div>
  );
}

export default Movie;