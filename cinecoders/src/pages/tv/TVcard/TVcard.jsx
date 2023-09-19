import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import CardMedia from "@mui/material/CardMedia"
import Typography from "@mui/material/Typography"
import { CardActionArea } from "@mui/material"

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
    <Card
      sx={{ borderRadius: "20px", border: "2px solid #58588a", maxWidth: 345 }}
    >
      <CardActionArea
        sx={{
          minHeight: 350,
        }}
      >
        <CardMedia
          component="img"
          image={"https://image.tmdb.org/t/p/w500/" + poster_path}
          title={name}
          style={{ height: "250px" }}
        />
        <CardContent
          style={{
            backgroundImage:
              "url(https://media.discordapp.net/attachments/1153339485065580695/1153368467626545152/Image_75.png?width=727&height=606)",
            color: "whitesmoke",
          }}
        >
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <hr />
          <br />
          <Typography variant="body2" color="whitesmoke">
            {minimText(overview, 20)}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}
