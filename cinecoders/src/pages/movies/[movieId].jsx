import React from "react";
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import CardMedia from '@mui/material/CardMedia';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export default function MoviePage({movieData}){
    
    return (
        <div className="test">
            <Container style={{ height: '800px' }}>
                
             <Grid container spacing={1}>
             <Grid item xs={5}>
             <h1>{movieData.title}</h1>
             <p>{movieData.tagline}</p>
             "{movieData.overview}"
             <br />
             <br />

             <ul>
                <li><b>Release Date:</b> {movieData.release_date}</li>
                <li><b>Runtime:</b> {movieData.runtime} min.</li>
                <li><b>Language:</b> {movieData.spoken_languages[0].english_name}</li>
                
                <li><b>Companies:</b></li>
             </ul>
             <Grid container spacing={1}>

         {movieData.production_companies.map((company) => (
           <Grid item xs key={company.id}>
            <br />
             <CardMedia
               component="img"
            src={`https://image.tmdb.org/t/p/w500${company.logo_path}`}
            style={{height: '15%', width: '55%'}}
                     />
          <CardContent>
            <Typography style={{fontSize:'12px'}}>{company.name}</Typography>
          </CardContent>
        </Grid>
      ))}
             </Grid>
             
             </Grid>

             <Grid item xs={6}>
             <CardMedia
          component="img"
          image={`https://image.tmdb.org/t/p/w500/${movieData.poster_path}`}
          style={{ height: '750px' }} />
             </Grid>

            

             </Grid>
             </Container>
        </div>
    )
}

export async function getServerSideProps(context){
    const {movieId} = context.query
    const url = `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`;
    const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ZjBlYzdlNWQyNjk1NGU5Yjc3MGVhNjU0Y2EzMjk5ZiIsInN1YiI6IjY1MDBmYTYwZWZlYTdhMDBmZDFiOTUyNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.8aDt5GtI-fsoy12WejvXZlqANpDVU2bfZ5gfoDmz5vw'
  }
};


    const response = await fetch(url, options)
    const data = await response.json()

    return {
        props: {
            movieData: data,
        }
    }
}
