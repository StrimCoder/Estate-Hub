import React from 'react';
import { 
  Box, 
  Paper, 
  Typography, 
  Slider, 
  FormControl, 
  InputLabel, 
  Select, 
  MenuItem, 
  TextField,
  Button,
  Grid,
  Divider
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';

const PropertyFilter = ({ filters, setFilters }) => {
  const handlePriceChange = (event, newValue) => {
    setFilters({ ...filters, price: newValue });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

  const handleReset = () => {
    setFilters({
      type: 'all',
      bedrooms: 'any',
      bathrooms: 'any',
      price: [0, 50000000],
      location: '',
      status: 'all'
    });
  };

  return (
    <Paper 
      elevation={4} 
      sx={{ 
        p: 4, 
        mb: 5, 
        borderRadius: 3,
        background: 'linear-gradient(to right, #f5f7fa, #e4e8f0)',
        boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
        <HomeIcon sx={{ fontSize: 32, color: 'primary.main', mr: 2 }} />
        <Typography variant="h4" fontWeight="bold" color="primary.main">
          Find Your Dream Property
        </Typography>
      </Box>
      
      <Divider sx={{ mb: 3 }} />
      
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={4}>
          <FormControl fullWidth variant="outlined" sx={{ mb: 2 }}>
            <InputLabel id="property-type-label">Property Type</InputLabel>
            <Select
              labelId="property-type-label"
              id="property-type"
              name="type"
              value={filters.type}
              label="Property Type"
              onChange={handleChange}
            >
              <MenuItem value="all">All Types</MenuItem>
              <MenuItem value="house">House</MenuItem>
              <MenuItem value="apartment">Apartment</MenuItem>
              <MenuItem value="condo">Condo</MenuItem>
              <MenuItem value="townhouse">Townhouse</MenuItem>
              <MenuItem value="commercial">Commercial</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        
        <Grid item xs={12} sm={6} md={4}>
          <FormControl fullWidth variant="outlined" sx={{ mb: 2 }}>
            <InputLabel id="bedrooms-label">Bedrooms</InputLabel>
            <Select
              labelId="bedrooms-label"
              id="bedrooms"
              name="bedrooms"
              value={filters.bedrooms}
              label="Bedrooms"
              onChange={handleChange}
            >
              <MenuItem value="any">Any</MenuItem>
              <MenuItem value={1}>1+</MenuItem>
              <MenuItem value={2}>2+</MenuItem>
              <MenuItem value={3}>3+</MenuItem>
              <MenuItem value={4}>4+</MenuItem>
              <MenuItem value={5}>5+</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        
        <Grid item xs={12} sm={6} md={4}>
          <FormControl fullWidth variant="outlined" sx={{ mb: 2 }}>
            <InputLabel id="bathrooms-label">Bathrooms</InputLabel>
            <Select
              labelId="bathrooms-label"
              id="bathrooms"
              name="bathrooms"
              value={filters.bathrooms}
              label="Bathrooms"
              onChange={handleChange}
            >
              <MenuItem value="any">Any</MenuItem>
              <MenuItem value={1}>1+</MenuItem>
              <MenuItem value={2}>2+</MenuItem>
              <MenuItem value={3}>3+</MenuItem>
              <MenuItem value={4}>4+</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        
        <Grid item xs={12} sm={6} md={4}>
          <FormControl fullWidth variant="outlined" sx={{ mb: 2 }}>
            <InputLabel id="status-label">Status</InputLabel>
            <Select
              labelId="status-label"
              id="status"
              name="status"
              value={filters.status}
              label="Status"
              onChange={handleChange}
            >
              <MenuItem value="all">All</MenuItem>
              <MenuItem value="For Sale">For Sale</MenuItem>
              <MenuItem value="For Rent">For Rent</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        
        <Grid item xs={12} sm={6} md={8}>
          <TextField
            fullWidth
            variant="outlined"
            id="location"
            name="location"
            label="Location"
            value={filters.location}
            onChange={handleChange}
            placeholder="City, Neighborhood, Area"
            sx={{ mb: 2 }}
          />
        </Grid>
      </Grid>
      
      <Box sx={{ mt: 3, mb: 4 }}>
        <Typography variant="h6" gutterBottom fontWeight="medium">
          Price Range
        </Typography>
        <Slider
          value={filters.price}
          onChange={handlePriceChange}
          valueLabelDisplay="auto"
          min={0}
          max={50000000}
          step={500000}
          valueLabelFormat={(value) => `₹${value.toLocaleString()}`}
          sx={{ color: 'primary.main' }}
        />
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography variant="body1" fontWeight="medium">₹{filters.price[0].toLocaleString()}</Typography>
          <Typography variant="body1" fontWeight="medium">₹{filters.price[1].toLocaleString()}</Typography>
        </Box>
      </Box>
      
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Button 
          variant="outlined" 
          onClick={handleReset} 
          sx={{ mr: 2, px: 4, py: 1, borderRadius: 2 }}
        >
          Reset
        </Button>
        <Button 
          variant="contained" 
          startIcon={<SearchIcon />}
          sx={{ 
            px: 4, 
            py: 1, 
            borderRadius: 2,
            background: 'linear-gradient(45deg, #1976d2 30%, #42a5f5 90%)',
            boxShadow: '0 3px 5px 2px rgba(33, 150, 243, .3)'
          }}
        >
          Search Properties
        </Button>
      </Box>
    </Paper>
  );
};

export default PropertyFilter;