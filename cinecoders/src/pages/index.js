import React from 'react';
import Grid from '@mui/material/Grid'; 
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import TVcard from '../components/Card/TVcard';
import Link from 'next/link';
export default function Home({latesttv}) {
  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
    <Navbar /> 

    <Grid
      container
      spacing={6}
      direction="row"
      justifyContent="space-evenly"
      alignItems="flex"
      style={{ paddingLeft: '3rem', paddingRight: '3rem' }}
    >
      {latesttv.results.map((movie) => (
        <Grid item xs={3} key={movie.id}>
          <Link href={'/TV/${movie.id}'}> <TVcard {...movie} /></Link>
          
        </Grid>
      ))}
    </Grid>
   
         
    <Footer/>
    </div>
  );
}



  
export async function getStaticProps (){ 
const url = 'https://api.themoviedb.org/3/trending/tv/day?language=en-US';
const options = {
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ZjBlYzdlNWQyNjk1NGU5Yjc3MGVhNjU0Y2EzMjk5ZiIsInN1YiI6IjY1MDBmYTYwZWZlYTdhMDBmZDFiOTUyNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.8aDt5GtI-fsoy12WejvXZlqANpDVU2bfZ5gfoDmz5vw'
  }
};
const response = await fetch(url,options);
const data = await response.json();
return { props : {latesttv:data,},}
}