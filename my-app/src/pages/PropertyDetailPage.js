import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  Container, 
  Grid, 
  Typography, 
  Box, 
  Button, 
  Chip, 
  Divider,
  Paper,
  ImageList,
  ImageListItem
} from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import BedIcon from '@mui/icons-material/Bed';
import BathtubIcon from '@mui/icons-material/Bathtub';
import SquareFootIcon from '@mui/icons-material/SquareFoot';
import HomeIcon from '@mui/icons-material/Home';
import ContactForm from '../components/ContactForm';
import properties from '../data/properties';

const PropertyDetailPage = () => {
  const { id } = useParams();
  const property = properties.find(p => p.id === parseInt(id));
  
  if (!property) {
    return (
      <Container sx={{ py: 8, textAlign: 'center' }}>
        <Typography variant="h4" gutterBottom>
          Property Not Found
        </Typography>
        <Typography variant="body1" paragraph>
          The property you're looking for doesn't exist or has been removed.
        </Typography>
        <Button component={Link} to="/properties" variant="contained">
          Browse Properties
        </Button>
      </Container>
    );
  }

  return (
    <Container sx={{ py: 4 }}>
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          {property.title}
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
          <LocationOnIcon color="action" sx={{ mr: 1 }} />
          <Typography variant="subtitle1" color="text.secondary">
            {property.location}
          </Typography>
        </Box>
      </Box>
      
      <Grid container spacing={4}>
        <Grid item xs={12} md={8}>
          {/* Main Image */}
          <Box 
            component="img"
            src={property.image}
            alt={property.title}
            sx={{
              width: '100%',
              height: 400,
              objectFit: 'cover',
              borderRadius: 1,
              mb: 2
            }}
          />
          
          {/* Image Gallery */}
          <ImageList cols={3} gap={8}>
            {property.images.map((img, index) => (
              <ImageListItem key={index}>
                <img
                  src={img}
                  alt={`${property.title} view ${index + 1}`}
                  loading="lazy"
                  style={{ borderRadius: 4 }}
                />
              </ImageListItem>
            ))}
          </ImageList>
          
          {/* Property Details */}
          <Box sx={{ mt: 4 }}>
            <Typography variant="h5" gutterBottom>
              Property Details
            </Typography>
            <Divider sx={{ mb: 2 }} />
            
            <Grid container spacing={2} sx={{ mb: 4 }}>
              <Grid item xs={6} sm={3}>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <BedIcon color="action" sx={{ mr: 1 }} />
                  <Typography>
                    {property.bedrooms} {property.bedrooms === 1 ? 'Bedroom' : 'Bedrooms'}
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={6} sm={3}>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <BathtubIcon color="action" sx={{ mr: 1 }} />
                  <Typography>
                    {property.bathrooms} {property.bathrooms === 1 ? 'Bathroom' : 'Bathrooms'}
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={6} sm={3}>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <SquareFootIcon color="action" sx={{ mr: 1 }} />
                  <Typography>
                    {property.size} sqft
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={6} sm={3}>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <HomeIcon color="action" sx={{ mr: 1 }} />
                  <Typography>
                    {property.type.charAt(0).toUpperCase() + property.type.slice(1)}
                  </Typography>
                </Box>
              </Grid>
            </Grid>
            
            <Typography variant="h6" gutterBottom>
              Description
            </Typography>
            <Typography variant="body1" paragraph>
              {property.description}
            </Typography>
            
            <Typography variant="h6" gutterBottom>
              Features
            </Typography>
            <Box sx={{ mb: 4 }}>
              {property.features.map((feature, index) => (
                <Chip 
                  key={index} 
                  label={feature} 
                  sx={{ mr: 1, mb: 1 }} 
                  variant="outlined" 
                />
              ))}
            </Box>
          </Box>
        </Grid>
        
        <Grid item xs={12} md={4}>
          <Paper elevation={3} sx={{ p: 3, mb: 3 }}>
            <Typography variant="h4" color="primary" gutterBottom>
              {property.status === 'For Sale' 
                ? `₹${property.price.toLocaleString()}` 
                : `₹${property.price.toLocaleString()}/month`}
            </Typography>
            <Chip 
              label={property.status} 
              color={property.status === 'For Sale' ? 'success' : 'info'} 
              sx={{ mb: 2 }} 
            />
            <Divider sx={{ my: 2 }} />
            <Button variant="contained" fullWidth sx={{ mb: 2 }}>
              Schedule Viewing
            </Button>
            <Button variant="outlined" fullWidth>
              Save Property
            </Button>
          </Paper>
          
          <ContactForm propertyId={property.id} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default PropertyDetailPage;