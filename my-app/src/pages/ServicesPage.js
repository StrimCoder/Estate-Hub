import React from 'react';
import { Container, Typography, Grid, Paper, Box } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import BusinessIcon from '@mui/icons-material/Business';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import HandshakeIcon from '@mui/icons-material/Handshake';
import ConstructionIcon from '@mui/icons-material/Construction';
import AssessmentIcon from '@mui/icons-material/Assessment';

const ServicesPage = () => {
  const services = [
    {
      title: 'Property Sales',
      description: 'We help you find your dream home with our extensive listings of residential properties across Maharashtra. Our expert agents will guide you through the entire buying process.',
      icon: <HomeIcon fontSize="large" color="primary" />
    },
    {
      title: 'Property Rentals',
      description: 'Discover rental properties that fit your lifestyle and budget requirements. We offer a wide range of rental options from apartments to luxury villas.',
      icon: <BusinessIcon fontSize="large" color="primary" />
    },
    {
      title: 'Property Management',
      description: 'Let us handle the complexities of managing your investment properties. Our comprehensive property management services ensure maximum returns with minimum hassle.',
      icon: <ConstructionIcon fontSize="large" color="primary" />
    },
    {
      title: 'Financial Services',
      description: 'Navigate the financial aspects of property transactions with our expert guidance on mortgages, loans, and investment strategies tailored to your needs.',
      icon: <AccountBalanceIcon fontSize="large" color="primary" />
    },
    {
      title: 'Legal Assistance',
      description: 'Our legal experts ensure all property transactions are compliant with local regulations and help you navigate the complex legal landscape of real estate.',
      icon: <HandshakeIcon fontSize="large" color="primary" />
    },
    {
      title: 'Property Valuation',
      description: 'Get accurate and reliable property valuations from our experienced team to make informed decisions about buying, selling, or investing in real estate.',
      icon: <AssessmentIcon fontSize="large" color="primary" />
    }
  ];

  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          bgcolor: 'primary.main',
          color: 'white',
          py: 8,
          textAlign: 'center',
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?auto=format&fit=crop&w=1600&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <Container maxWidth="md">
          <Typography variant="h2" component="h1" gutterBottom>
            Our Services
          </Typography>
          <Typography variant="h5" paragraph>
            Comprehensive real estate solutions tailored to your needs
          </Typography>
        </Container>
      </Box>

      {/* Services Section */}
      <Container sx={{ py: 8 }}>
        <Typography variant="h4" component="h2" gutterBottom align="center" sx={{ mb: 2 }}>
          What We Offer
        </Typography>
        <Typography variant="subtitle1" paragraph align="center" sx={{ mb: 6 }}>
          Estate Hub provides a complete range of real estate services to help you achieve your property goals
        </Typography>

        <Grid container spacing={4}>
          {services.map((service, index) => (
            <Grid item key={index} xs={12} sm={6} md={4}>
              <Paper 
                elevation={3} 
                sx={{ 
                  p: 4, 
                  height: '100%', 
                  display: 'flex', 
                  flexDirection: 'column',
                  transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    boxShadow: 6
                  }
                }}
              >
                <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
                  {service.icon}
                </Box>
                <Typography variant="h5" component="h3" gutterBottom align="center">
                  {service.title}
                </Typography>
                <Typography variant="body1" align="center">
                  {service.description}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Process Section */}
      <Box sx={{ bgcolor: 'grey.100', py: 8 }}>
        <Container>
          <Typography variant="h4" component="h2" gutterBottom align="center" sx={{ mb: 2 }}>
            Our Process
          </Typography>
          <Typography variant="subtitle1" paragraph align="center" sx={{ mb: 6 }}>
            We follow a structured approach to ensure the best outcomes for our clients
          </Typography>

          <Grid container spacing={4}>
            {[
              { 
                step: '01', 
                title: 'Initial Consultation', 
                description: 'We begin by understanding your specific needs and requirements through a detailed consultation.' 
              },
              { 
                step: '02', 
                title: 'Property Search', 
                description: 'Our team conducts a thorough search to find properties that match your criteria and preferences.' 
              },
              { 
                step: '03', 
                title: 'Property Viewing', 
                description: 'We arrange viewings of selected properties at your convenience to help you make an informed decision.' 
              },
              { 
                step: '04', 
                title: 'Negotiation', 
                description: 'Our experienced agents negotiate the best possible terms and price on your behalf.' 
              },
              { 
                step: '05', 
                title: 'Documentation', 
                description: 'We handle all the paperwork and legal documentation to ensure a smooth transaction process.' 
              },
              { 
                step: '06', 
                title: 'Closing', 
                description: 'We guide you through the final steps of the transaction and ensure a successful closing.' 
              }
            ].map((process, index) => (
              <Grid item key={index} xs={12} sm={6} md={4}>
                <Paper 
                  elevation={2} 
                  sx={{ 
                    p: 3, 
                    height: '100%',
                    position: 'relative',
                    overflow: 'hidden'
                  }}
                >
                  <Typography 
                    variant="h1" 
                    sx={{ 
                      position: 'absolute', 
                      top: -20, 
                      right: -10, 
                      opacity: 0.1, 
                      fontSize: '8rem',
                      fontWeight: 'bold',
                      color: 'primary.main'
                    }}
                  >
                    {process.step}
                  </Typography>
                  <Typography variant="h5" component="h3" gutterBottom>
                    {process.title}
                  </Typography>
                  <Typography variant="body1">
                    {process.description}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Why Choose Us Section */}
      <Container sx={{ py: 8 }}>
        <Typography variant="h4" component="h2" gutterBottom align="center" sx={{ mb: 2 }}>
          Why Choose Estate Hub
        </Typography>
        <Typography variant="subtitle1" paragraph align="center" sx={{ mb: 6 }}>
          We are committed to providing exceptional service and value to our clients
        </Typography>

        <Grid container spacing={4}>
          {[
            { title: 'Experienced Team', description: 'Our agents have years of experience in the Maharashtra real estate market.' },
            { title: 'Personalized Service', description: 'We tailor our services to meet your specific needs and requirements.' },
            { title: 'Extensive Network', description: 'We have an extensive network of property owners, buyers, and industry professionals.' },
            { title: 'Transparent Process', description: 'We maintain complete transparency throughout the entire transaction process.' }
          ].map((reason, index) => (
            <Grid item key={index} xs={12} md={6}>
              <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 2 }}>
                <Box 
                  sx={{ 
                    bgcolor: 'primary.main', 
                    color: 'white', 
                    width: 40, 
                    height: 40, 
                    borderRadius: '50%', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    mr: 2,
                    flexShrink: 0
                  }}
                >
                  <Typography variant="h6">{index + 1}</Typography>
                </Box>
                <Box>
                  <Typography variant="h6" gutterBottom>
                    {reason.title}
                  </Typography>
                  <Typography variant="body1">
                    {reason.description}
                  </Typography>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default ServicesPage;