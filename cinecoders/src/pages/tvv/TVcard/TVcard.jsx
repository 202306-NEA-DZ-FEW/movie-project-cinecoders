import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import CardMedia from "@mui/material/CardMedia"
import Typography from "@mui/material/Typography"
import { Button, CardActionArea, CardActions } from "@mui/material"
import Link from "next/link"

export default function TVcard(props) {
  const { name, poster_path, overview, id } = props
  const minimText = (text, numWords) => {
    const words = text.split(" ")
    if (words.length > numWords) {
      return words.slice(0, numWords).join(" ") + "..."
    }
    return text
  }

  

  return (
    <Card sx={ {borderRadius: "20px",
    border: "2px solid #58588a",  maxWidth: 345,}}>
      <CardActionArea href={`/tvv/${id}`} sx={{
        minHeight: 450,
      }}>
        <CardMedia 
          component="img"
          image={"https://image.tmdb.org/t/p/w500/" + poster_path}
          title={name}
          style={{ height: "250px" }}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <hr />
          <br />
          <Typography variant="body2" color="text.secondary">
            {minimText(overview, 20)}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}
