import React from 'react';
import { AppBar, Toolbar, Typography, Button, Container } from '@mui/material';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <AppBar position="static">
      <Container>
        <Toolbar>
          <Typography variant="h6" component={Link} to="/" sx={{ flexGrow: 1, textDecoration: 'none', color: 'white' }}>
            EstateHub
          </Typography>
          <Button color="inherit" component={Link} to="/">Home</Button>
           <Button color="inherit" component={Link} to="/">Feature Propeties</Button>
            <Button color="inherit" component={Link} to="/">All Properties</Button>
            <Button color="inherit" component={Link} to="/services">Our Services</Button>
            <Button color="inherit" component={Link} to="/contact">Contact Us</Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;