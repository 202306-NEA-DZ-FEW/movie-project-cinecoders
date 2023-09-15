import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import CardMedia from "@mui/material/CardMedia"
import Typography from "@mui/material/Typography"
import { Button, CardActionArea, CardActions } from "@mui/material"
import Link from "next/link"

export default function MovieCard(props) {
  const { title, poster_path, overview, id } = props
  const minimText = (text, numWords) => {
    const words = text.split(" ")
    if (words.length > numWords) {
      return words.slice(0, numWords).join(" ") + "..."
    }
    return text
  }

  return (
    <Card
      sx={{
        minHeight: 550,
        maxWidth: 345,
        borderRadius: "20px",
        border: "2px solid #58588a",
      }}
    >
      <CardActionArea>
        <CardMedia 
          component="img"
          image={"https://image.tmdb.org/t/p/w500/" + poster_path}
          style={{ height: "250px" }}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <hr />
          <br />
          <Typography variant="body2" color="text.secondary">
            {minimText(overview, 20)}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Link href={`/movies/${id}`}>
          <Button size="small" color="primary">
            Full movie profile
          </Button>
        </Link>
      </CardActions>
    </Card>
  )
}
