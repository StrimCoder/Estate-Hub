import React from 'react';
import { Box, Container, Grid, Typography, Link, IconButton } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
  return (
    <Box
      sx={{
        bgcolor: 'primary.main',
        color: 'white',
        py: 6,
        mt: 'auto'
      }}
      component="footer"
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              RealEstate Finder
            </Typography>
            <Typography variant="body2">
              Find your dream property with our extensive listings of homes, apartments, and commercial spaces.
            </Typography>
            <Box sx={{ mt: 2 }}>
              <IconButton color="inherit" aria-label="Facebook">
                <FacebookIcon />
              </IconButton>
              <IconButton color="inherit" aria-label="Twitter">
                <TwitterIcon />
              </IconButton>
              <IconButton color="inherit" aria-label="Instagram">
                <InstagramIcon />
              </IconButton>
              <IconButton color="inherit" aria-label="LinkedIn">
                <LinkedInIcon />
              </IconButton>
            </Box>
          </Grid>
          
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              Quick Links
            </Typography>
            <Typography variant="body2" component="div">
              <Link href="/" color="inherit" underline="hover" display="block" sx={{ mb: 1 }}>
                Home
              </Link>
              <Link href="/#properties" color="inherit" underline="hover" display="block" sx={{ mb: 1 }}>
                Properties
              </Link>
              <Link href="/#contact" color="inherit" underline="hover" display="block" sx={{ mb: 1 }}>
                Contact Us
              </Link>
              <Link href="#" color="inherit" underline="hover" display="block" sx={{ mb: 1 }}>
                Privacy Policy
              </Link>
              <Link href="#" color="inherit" underline="hover" display="block">
                Terms of Service
              </Link>
            </Typography>
          </Grid>
          
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              Contact Info
            </Typography>
            <Typography variant="body2" paragraph>
              123 Real Estate Street
              <br />
              Cityville, State 12345
            </Typography>
            <Typography variant="body2" paragraph>
              Phone: (123) 456-7890
              <br />
              Email: info@realestatefinder.com
            </Typography>
            <Typography variant="body2">
              Office Hours: Mon-Fri 9am-5pm
            </Typography>
          </Grid>
        </Grid>
        
        <Box sx={{ mt: 5, textAlign: 'center' }}>
          <Typography variant="body2">
            © {new Date().getFullYear()} RealEstate Finder. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;