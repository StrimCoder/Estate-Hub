import React from 'react';
import { Card, CardContent, CardMedia, Typography, Button, Box, Chip } from '@mui/material';
import { Link } from 'react-router-dom';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import BedIcon from '@mui/icons-material/Bed';
import BathtubIcon from '@mui/icons-material/Bathtub';
import SquareFootIcon from '@mui/icons-material/SquareFoot';

const PropertyCard = ({ property }) => {
  return (
    <Card sx={{ maxWidth: 345, height: '100%', display: 'flex', flexDirection: 'column' }}>
      <CardMedia
        component="img"
        height="200"
        image={property.image}
        alt={property.title}
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography gutterBottom variant="h5" component="div">
          ₹{property.price.toLocaleString()}
        </Typography>
        <Typography variant="body1" color="text.primary">
          {property.title}
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 1, mt: 1 }}>
          <LocationOnIcon fontSize="small" color="action" />
          <Typography variant="body2" color="text.secondary" sx={{ ml: 0.5 }}>
            {property.location}
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2, mb: 2 }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <BedIcon fontSize="small" color="action" />
            <Typography variant="body2" color="text.secondary" sx={{ ml: 0.5 }}>
              {property.bedrooms} beds
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <BathtubIcon fontSize="small" color="action" />
            <Typography variant="body2" color="text.secondary" sx={{ ml: 0.5 }}>
              {property.bathrooms} baths
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <SquareFootIcon fontSize="small" color="action" />
            <Typography variant="body2" color="text.secondary" sx={{ ml: 0.5 }}>
              {property.size} sqft
            </Typography>
          </Box>
        </Box>
        <Box sx={{ mt: 1 }}>
          <Chip 
            label={property.type} 
            size="small" 
            color="primary" 
            variant="outlined" 
            sx={{ mr: 1 }} 
          />
          <Chip 
            label={property.status} 
            size="small" 
            color={property.status === 'For Sale' ? 'success' : 'info'} 
          />
        </Box>
      </CardContent>
      <Box sx={{ p: 2, pt: 0 }}>
        <Button 
          component={Link} 
          to={`/property/${property.id}`} 
          variant="contained" 
          fullWidth
        >
          View Details
        </Button>
      </Box>
    </Card>
  );
};

export default PropertyCard;