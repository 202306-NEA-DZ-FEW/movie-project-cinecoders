import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function TVcard({name,first_air_date,poster_path}) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={"https://image.tmdb.org/t/p/w500/" + poster_path}
        title={name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         <Button>{name}</Button>
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {first_air_date}
        </Typography>
      </CardContent>
    </Card>
  );
}