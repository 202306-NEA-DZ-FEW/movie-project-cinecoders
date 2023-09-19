import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import CardMedia from "@mui/material/CardMedia"
import Typography from "@mui/material/Typography"
import { CardActionArea } from "@mui/material"

export default function ActorCard(props) {
  const { name, profile_path, id } = props

  return (
    <Card
      sx={{
        minHeight: "auto",
        maxWidth: 300,
        borderRadius: "20px",
        border: "2px solid #4682B4",
      }}
    >
      <CardActionArea href={`/actors/${id}`}>
        <CardMedia
          component="img"
          image={"https://image.tmdb.org/t/p/w500/" + profile_path}
          style={{ height: "200px" }}
        />
        <CardContent
          style={{
            backgroundImage:
              "url(https://media.discordapp.net/attachments/1153339485065580695/1153368467626545152/Image_75.png?width=727&height=606)",
            color: "whitesmoke",
          }}
        >
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{ textAlign: "center" }}
          >
            {name}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}
