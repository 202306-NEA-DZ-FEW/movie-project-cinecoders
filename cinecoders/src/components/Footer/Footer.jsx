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
        backgroundColor: (theme) =>
          theme.palette.mode === 'light'
            ? theme.palette.grey[200]
            : theme.palette.grey[800],
        p: 6,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={5}>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              About Us
            </Typography>
            <Typography variant="body2" color="text.secondary">
            This website has been crafted by our team as part of a project during our Front-End Web Development Bootcamp at Re:coded. 
            If you have any questions, feedback, or just want to connect with our dedicated team, here's our full team and where to contact us ---
            </Typography>
          </Grid>

          <Grid item xs={12} sm={8}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              Follow Us
            </Typography>
            <Grid container spacing={2}>
              

              <Grid item xs={4} sx={{ display: 'flex', alignItems: 'center' }}>
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                   <Typography variant="body2" color="text.secondary"> Louisa </Typography>
                   
                   <Link href="https://github.com/Polichinell" color="inherit">  <GitHub /> </Link>
                   </div>
              </Grid>
              <Grid item xs={4} sx={{ display: 'flex', alignItems: 'center' }}>
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                   <Typography variant="body2" color="text.secondary"> Walid </Typography>
                   <Link href="https://www.linkedin.com/in/walid-t-belharazem/" color="inherit">  <LinkedInIcon /> </Link>
                   <Link href="https://github.com/walidbelharazem" color="inherit">  <GitHub /> </Link>
                   </div>
              </Grid>
              <Grid item xs={4} sx={{ display: 'flex', alignItems: 'center' }}>
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                   <Typography variant="body2" color="text.secondary"> Mounia </Typography>
                   <Link href="https://www.linkedin.com/in/mounia-belkheir-5709011b9" color="inherit">  <LinkedInIcon /> </Link>
                   <Link href="https://github.com/MouniaBelkheir" color="inherit">  <GitHub /> </Link>
                   </div>
              </Grid>
              <Grid item xs={4} sx={{ display: 'flex', alignItems: 'center' }}>
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                   <Typography variant="body2" color="text.secondary"> Bushra </Typography>
                   <Link href="https://www.linkedin.com/in/bushra-djalti-0b1b52287/" color="inherit">  <LinkedInIcon /> </Link>
                   <Link href="https://github.com/Bushra369" color="inherit">  <GitHub /> </Link>
                   </div>
              </Grid>
              <Grid item xs={4} sx={{ display: 'flex', alignItems: 'center' }}>
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                   <Typography variant="body2" color="text.secondary"> Khaoula </Typography>
                   <Link href="https://www.linkedin.com/" color="inherit">  <LinkedInIcon /> </Link>
                   <Link href="https://github.com/" color="inherit">  <GitHub /> </Link>
                   </div>
              </Grid>
              <Grid item xs={4} sx={{ display: 'flex', alignItems: 'center' }}>
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                   <Typography variant="body2" color="text.secondary"> Khalil </Typography>
                  
                   <Link href=" https://github.com/Khalil-NOUI" color="inherit">  <GitHub /> </Link>
                   </div>
              </Grid>



            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
