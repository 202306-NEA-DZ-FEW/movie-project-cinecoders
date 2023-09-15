import Link from 'next/link';
import Container from "@mui/material/Container"


const MoviesDropdown = () => {
  

  return (
    <div>
      <Link href={`/`} className="noDeco">
<Container  sx={{color: 'white', marginBottom: '1rem'}}> Cinecoders</Container>
        </Link>
        <Link href={`/movies/toprate`}><button className='buttooon'>Top Rate</button></Link>
        <Link href={`/movies/popular`}><button className='buttooon'>Popular</button></Link>
        <Link href={`/movies/upcoming`}><button className='buttooon'>Upcoming</button></Link>
        <Link href={`/movies/nowplaying`}><button className='buttooon'>Now Playing</button></Link>
    </div>
  );
};

export default MoviesDropdown;
