const TMDB_API_KEY =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ZjBlYzdlNWQyNjk1NGU5Yjc3MGVhNjU0Y2EzMjk5ZiIsInN1YiI6IjY1MDBmYTYwZWZlYTdhMDBmZDFiOTUyNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.8aDt5GtI-fsoy12WejvXZlqANpDVU2bfZ5gfoDmz5vw"

// Function to fetch genres from TMDB API
async function fetchGenres() {
  const url = "https://api.themoviedb.org/3/genre/movie/list?language=en"
  const options = {
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${TMDB_API_KEY}`,
    },
  }

  const response = await fetch(url, options)
  const data = await response.json()
  return data.genres
}

// Function to fetch movies by genre from TMDB API
async function fetchMoviesByGenre(genreId) {
  const url = `https://api.themoviedb.org/3/discover/movie?with_genres=${genreId}&api_key=9f0ec7e5d26954e9b770ea654ca3299f`

  const response = await fetch(url)
  const data = await response.json()
  return data.results
}

module.exports = {
  fetchGenres,
  fetchMoviesByGenre,
}
