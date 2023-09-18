import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import CardMedia from "@mui/material/CardMedia"
import Typography from "@mui/material/Typography"
import { Button, CardActionArea, CardActions } from "@mui/material"
import Link from "next/link"

export default function ActorCard(props) {
  const { name, profile_path, id } = props

  return (
    <Card
      sx={{
        minHeight: "auto",
        maxWidth: 300,
        borderRadius: "20px",
        border: "2px solid #58588a",
      }}
    >
      
      <CardActionArea href={`/actors/${id}`}>
        <CardMedia 
          component="img"
          image={"https://image.tmdb.org/t/p/w500/" + profile_path}
          style={{ height: "200px" }}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" sx={ { textAlign: 'center' }}>
            {name}
          </Typography>
         
        </CardContent>
      </CardActionArea>

    </Card>
  )
}
