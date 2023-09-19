import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import MovieCard from "@/components/Card/Card"
import { fetchMoviesByGenre } from "../../util/api"
import Grid from "@mui/material/Grid"
import Navbar from "@/components/Navbar/Navbar"

export default function GenrePage() {
  const router = useRouter()
  const { id } = router.query
  const [movies, setMovies] = useState([])

  useEffect(() => {
    if (id) {
      fetchMoviesByGenre(id).then((data) => {
        if (data) {
          setMovies(data)
        }
      })
    }
  }, [id])

  return (
    <div>
      <Navbar />

      <Grid
        container
        spacing={5}
        direction="row"
        justifyContent="space-evenly"
        alignItems="flex"
        paddingLeft="3rem"
        paddingRight="2rem"
      >
        {movies.map((movie) => (
          <Grid item xs={3} key={movie.id} style={{ minWidth: 300 }}>
            <MovieCard {...movie} />
          </Grid>
        ))}
      </Grid>
      {console.log(fetchMoviesByGenre(id))}
    </div>
  )
}
