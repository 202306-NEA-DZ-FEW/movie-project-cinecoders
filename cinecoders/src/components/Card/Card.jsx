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
        borderRadius: "20px",
        border: "2px solid #4682B4",
        maxWidth: 345,
        backgroundColor: "#464850",
        backgroundImage:
          "url(https://media.discordapp.net/attachments/1153339485065580695/1153368467626545152/Image_75.png?width=727&height=606)",
        color: "whitesmoke",
      }}
    >
      <CardActionArea
        href={`/movies/${id}`}
        sx={{
          minHeight: 450,
        }}
      >
        <CardMedia
          component="img"
          image={"https://image.tmdb.org/t/p/w500/" + poster_path}
          style={{ height: "250px" }}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <hr style={{ color: `rgba(255,255,250, 0.2)` }} />
          <br />
          <Typography variant="body2" color="whitesmoke">
            {minimText(overview, 20)}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}
