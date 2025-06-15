import React from 'react';
import { Container, Typography, Grid, Paper, Box, TextField, Button } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

const ContactPage = () => {
  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          bgcolor: 'primary.main',
          color: 'white',
          py: 8,
          textAlign: 'center',
          // backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(https://images.unsplash.com/photo-1560520031-3a4dc4e9de0c?auto=format&fit=crop&w=1600&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <Container maxWidth="md">
          <Typography variant="h2" component="h1" gutterBottom>
            Contact Us
          </Typography>
          <Typography variant="h5" paragraph>
            We're here to help with all your real estate needs
          </Typography>
        </Container>
      </Box>

      {/* Contact Form Section */}
      <Container sx={{ py: 8 }}>
        <Grid container spacing={6}>
          <Grid item xs={12} md={6}>
            <Typography variant="h4" component="h2" gutterBottom>
              Get In Touch
            </Typography>
            <Typography variant="body1" paragraph sx={{ mb: 4 }}>
              Have questions about a property or our services? Fill out the form below and our team will get back to you as soon as possible.
            </Typography>
            
            <Box component="form" noValidate sx={{ mt: 1 }}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id="name"
                    label="Full Name"
                    name="name"
                    autoComplete="name"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    id="phone"
                    label="Phone Number"
                    name="phone"
                    autoComplete="tel"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    id="subject"
                    label="Subject"
                    name="subject"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    id="message"
                    label="Message"
                    name="message"
                    multiline
                    rows={4}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    size="large"
                    sx={{ mt: 2 }}
                  >
                    Send Message
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </Grid>
          
          <Grid item xs={12} md={6}>
            <Paper elevation={3} sx={{ p: 4, height: '100%' }}>
              <Typography variant="h4" component="h2" gutterBottom sx={{ color: 'primary.main' }}>
                Our Offices
              </Typography>
              
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4, mt: 4 }}>
                <Box sx={{ display: 'flex', alignItems: 'flex-start' }}>
                  <LocationOnIcon color="primary" sx={{ fontSize: 28, mr: 2, mt: 0.5 }} />
                  <Box>
                    <Typography variant="h6" gutterBottom>
                      Pune Office (Headquarters)
                    </Typography>
                    <Typography variant="body1">
                      123 Real Estate Street<br />
                      Koregaon Park, Pune 411001<br />
                      Maharashtra, India
                    </Typography>
                  </Box>
                </Box>
                
                <Box sx={{ display: 'flex', alignItems: 'flex-start' }}>
                  <LocationOnIcon color="primary" sx={{ fontSize: 28, mr: 2, mt: 0.5 }} />
                  <Box>
                    <Typography variant="h6" gutterBottom>
                      Mumbai Office
                    </Typography>
                    <Typography variant="body1">
                      456 Property Avenue<br />
                      Bandra West, Mumbai 400050<br />
                      Maharashtra, India
                    </Typography>
                  </Box>
                </Box>
                
                <Box sx={{ display: 'flex', alignItems: 'flex-start' }}>
                  <PhoneIcon color="primary" sx={{ fontSize: 28, mr: 2, mt: 0.5 }} />
                  <Box>
                    <Typography variant="h6" gutterBottom>
                      Phone
                    </Typography>
                    <Typography variant="body1">
                      Pune: +91 98765 43210<br />
                      Mumbai: +91 98765 43211
                    </Typography>
                  </Box>
                </Box>
                
                <Box sx={{ display: 'flex', alignItems: 'flex-start' }}>
                  <EmailIcon color="primary" sx={{ fontSize: 28, mr: 2, mt: 0.5 }} />
                  <Box>
                    <Typography variant="h6" gutterBottom>
                      Email
                    </Typography>
                    <Typography variant="body1">
                      info@estatehub.com<br />
                      support@estatehub.com
                    </Typography>
                  </Box>
                </Box>
                
                <Box sx={{ display: 'flex', alignItems: 'flex-start' }}>
                  <AccessTimeIcon color="primary" sx={{ fontSize: 28, mr: 2, mt: 0.5 }} />
                  <Box>
                    <Typography variant="h6" gutterBottom>
                      Office Hours
                    </Typography>
                    <Typography variant="body1">
                      Monday - Friday: 9:00 AM - 6:00 PM<br />
                      Saturday: 10:00 AM - 3:00 PM<br />
                      Sunday: Closed
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>
      
      {/* Map Section */}
      <Box sx={{ height: '400px', width: '100%', bgcolor: 'grey.200', mb: 0 }}>
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d242118.14199614953!2d73.72287834316406!3d18.524564859944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf2e67461101%3A0x828d43bf9d9ee343!2sPune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1635835234134!5m2!1sen!2sin" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen="" 
          loading="lazy"
          title="Office Location"
        ></iframe>
      </Box>
      
      {/* Bootstrap Grid Example */}
      <Container sx={{ py: 4 }}>
        <div className="row">
          <div className="col-8">col-8</div>
          <div className="col-4">col-4</div>
        </div>
      </Container>
    </Box>
  );
};

export default ContactPage;