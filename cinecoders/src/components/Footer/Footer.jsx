import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { GitHub } from '@mui/icons-material';


export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: 'rgb(35, 58, 66)',
        p: 6,
      }}
    >
      <Container maxWidth="lg" >
        <Grid container spacing={20} >
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="#6082B6" gutterBottom>
              About Us
            </Typography>
            <Typography variant="body2" color="whitesmoke">
            This website has been crafted by our team as part of a project during our Front-End Web Development Bootcamp at Re:coded. 
            If you have any questions, feedback, or just want to connect with our dedicated team, here's our full team and where to contact us ---
            </Typography>
          </Grid>

          <Grid item xs={12} sm={8}>
            <Typography variant="h6" color="#6082B6" gutterBottom>
              Cinecoders
            </Typography>
            <Grid container spacing={2}>
              

              <Grid item xs={4} sx={{ display: 'flex', alignItems: 'center' }}>
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                   <Typography variant="body2" color="whitesmoke"> Louisa </Typography>
                   
                   <Link href="https://github.com/Polichinell" style={{paddingLeft:'1rem'}} target="_blank" color="#6082B6">  <GitHub /> </Link>
                   </div>
              </Grid>
              <Grid item xs={4} sx={{ display: 'flex', alignItems: 'center' }}>
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                   <Typography variant="body2" color="whitesmoke"> Walid </Typography>
                   <Link style={{paddingLeft:'1rem'}} href="https://www.linkedin.com/in/walid-t-belharazem/" target="_blank" color="#6082B6">  <LinkedInIcon /> </Link>
                   <Link href="https://github.com/walidbelharazem" target="_blank" color="#6082B6">  <GitHub /> </Link>
                   </div>
              </Grid>
              <Grid item xs={4} sx={{ display: 'flex', alignItems: 'center' }}>
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                   <Typography variant="body2" color="whitesmoke"> Mounia </Typography>
                   <Link style={{paddingLeft:'1rem'}} href="https://www.linkedin.com/in/mounia-belkheir-5709011b9" target="_blank" color="#6082B6">  <LinkedInIcon /> </Link>
                   <Link  href="https://github.com/MouniaBelkheir" target="_blank" color="#6082B6">  <GitHub /> </Link>
                   </div>
              </Grid>
              <Grid item xs={4} sx={{ display: 'flex', alignItems: 'center' }}>
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                   <Typography variant="body2" color="whitesmoke"> Bushra </Typography>
                   <Link style={{paddingLeft:'1rem'}} href="https://www.linkedin.com/in/bushra-djalti-0b1b52287/" target="_blank" color="#6082B6">  <LinkedInIcon /> </Link>
                   <Link href="https://github.com/Bushra369" target="_blank" color="#6082B6">  <GitHub /> </Link>
                   </div>
              </Grid>
              <Grid item xs={4} sx={{ display: 'flex', alignItems: 'center' }}>
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                   <Typography variant="body2" color="whitesmoke"> Khaoula </Typography>
                   <Link style={{paddingLeft:'1rem'}} href="https://www.linkedin.com/" target="_blank" color="#6082B6">  <LinkedInIcon /> </Link>
                   <Link href="https://github.com/" target="_blank" color="#6082B6">  <GitHub /> </Link>
                   </div>
              </Grid>
              <Grid item xs={4} sx={{ display: 'flex', alignItems: 'center' }}>
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                   <Typography variant="body2" color="whitesmoke"> Khalil </Typography>
                  
                   <Link style={{paddingLeft:'1rem'}} href=" https://github.com/Khalil-NOUI" target="_blank" color="#6082B6">  <GitHub /> </Link>
                   </div>
              </Grid>



            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}