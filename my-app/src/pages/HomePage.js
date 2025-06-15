import React, { useState, useMemo } from 'react';
import { Box, Container, Typography, Button, Grid, Paper, Pagination } from '@mui/material';
import { Link } from 'react-router-dom';
import properties from '../data/properties';
import PropertyCard from '../components/PropertyCard';
import PropertyFilter from '../components/PropertyFilter';
import PropertySort from '../components/PropertySort';
import ContactForm from '../components/ContactForm';

const HomePage = () => {
  // Featured properties (first 3)
  const featuredProperties = properties.slice(0, 3);
  
  // Properties listing state
  const [filters, setFilters] = useState({
    type: 'all',
    bedrooms: 'any',
    bathrooms: 'any',
    price: [0, 50000000],
    location: '',
    status: 'all'
  });
  
  const [sortOption, setSortOption] = useState('newest');
  const [page, setPage] = useState(1);
  const propertiesPerPage = 6;

  // Filter properties based on selected filters
  const filteredProperties = useMemo(() => {
    return properties.filter(property => {
      // Filter by type
      if (filters.type !== 'all' && property.type !== filters.type) {
        return false;
      }
      
      // Filter by bedrooms
      if (filters.bedrooms !== 'any' && property.bedrooms < filters.bedrooms) {
        return false;
      }
      
      // Filter by bathrooms
      if (filters.bathrooms !== 'any' && property.bathrooms < filters.bathrooms) {
        return false;
      }
      
      // Filter by price range
      if (property.price < filters.price[0] || property.price > filters.price[1]) {
        return false;
      }
      
      // Filter by location (case insensitive)
      if (filters.location && !property.location.toLowerCase().includes(filters.location.toLowerCase())) {
        return false;
      }
      
      // Filter by status
      if (filters.status !== 'all' && property.status !== filters.status) {
        return false;
      }
      
      return true;
    });
  }, [filters]);

  // Sort filtered properties
  const sortedProperties = useMemo(() => {
    return [...filteredProperties].sort((a, b) => {
      switch (sortOption) {
        case 'price-asc':
          return a.price - b.price;
        case 'price-desc':
          return b.price - a.price;
        case 'bedrooms':
          return b.bedrooms - a.bedrooms;
        case 'bathrooms':
          return b.bathrooms - a.bathrooms;
        case 'size':
          return b.size - a.size;
        case 'newest':
        default:
          return b.id - a.id;
      }
    });
  }, [filteredProperties, sortOption]);

  // Paginate properties
  const paginatedProperties = useMemo(() => {
    const startIndex = (page - 1) * propertiesPerPage;
    return sortedProperties.slice(startIndex, startIndex + propertiesPerPage);
  }, [sortedProperties, page]);

  const handlePageChange = (event, value) => {
    setPage(value);
    window.scrollTo(0, 0);
  };

  const pageCount = Math.ceil(sortedProperties.length / propertiesPerPage);

  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          bgcolor: 'primary.main',
          color: 'white',
          py: 8,
          textAlign: 'center',
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1600&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <Container maxWidth="md">
          <Typography variant="h2" component="h1" gutterBottom>
            Find Your Dream Home
          </Typography>
          <Typography variant="h5" paragraph>
            Discover the perfect property from our extensive listings across Maharashtra
          </Typography>
          <Button
            component="a"
            href="#properties"
            variant="contained"
            color="secondary"
            size="large"
            sx={{ mt: 2 }}
          >
            Browse Properties
          </Button>
        </Container>
      </Box>

      {/* Property Filter Section */}
      <Container sx={{ py: 4 }}>
        <PropertyFilter filters={filters} setFilters={setFilters} />
      </Container>

      {/* Featured Properties Section */}
      <Container sx={{ py: 4 }}>
        <Typography variant="h4" component="h2" gutterBottom align="center">
          Featured Properties
        </Typography>
        <Typography variant="subtitle1" paragraph align="center" sx={{ mb: 4 }}>
          Explore our hand-picked selection of premium properties
        </Typography>

        <Grid container spacing={4}>
          {featuredProperties.map((property) => (
            <Grid item key={property.id} xs={12} sm={6} md={4}>
              <PropertyCard property={property} />
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* All Properties Section */}
      <Box sx={{ bgcolor: 'grey.100', py: 8 }} id="properties">
        <Container>
          <Typography variant="h4" component="h2" gutterBottom align="center">
            All Properties
          </Typography>
          <Typography variant="subtitle1" paragraph align="center" sx={{ mb: 4 }}>
            Find your perfect property from our complete listings
          </Typography>
          
          <Box 
            sx={{ 
              display: 'flex', 
              flexDirection: { xs: 'column', md: 'row' },
              justifyContent: 'space-between', 
              alignItems: { xs: 'flex-start', md: 'center' }, 
              mb: 4,
              mt: 2,
              py: 2,
              px: 3,
              borderRadius: 2,
              backgroundColor: 'rgba(25, 118, 210, 0.08)',
              border: '1px solid rgba(25, 118, 210, 0.2)'
            }}
          >
            <Typography 
              variant="h6" 
              sx={{ 
                fontWeight: 'bold',
                color: 'primary.main',
                mb: { xs: 2, md: 0 }
              }}
            >
              {sortedProperties.length} Properties Found in Maharashtra
            </Typography>
            <PropertySort sortOption={sortOption} setSortOption={setSortOption} />
          </Box>
          
          {paginatedProperties.length > 0 ? (
            <>
              <Grid container spacing={4}>
                {paginatedProperties.map((property) => (
                  <Grid item key={property.id} xs={12} sm={6} md={4}>
                    <PropertyCard property={property} />
                  </Grid>
                ))}
              </Grid>
              
              {pageCount > 1 && (
                <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
                  <Pagination 
                    count={pageCount} 
                    page={page} 
                    onChange={handlePageChange} 
                    color="primary" 
                    size="large"
                  />
                </Box>
              )}
            </>
          ) : (
            <Box sx={{ py: 4, textAlign: 'center' }}>
              <Typography variant="h6">
                No properties match your search criteria.
              </Typography>
              <Typography variant="body1" sx={{ mt: 1 }}>
                Try adjusting your filters to see more results.
              </Typography>
            </Box>
          )}
        </Container>
      </Box>

      {/* Services Section */}
      <Box sx={{ py: 8 }}>
        <Container>
          <Typography variant="h4" component="h2" gutterBottom align="center">
            Our Services
          </Typography>
          <Typography variant="subtitle1" paragraph align="center" sx={{ mb: 4 }}>
            We offer comprehensive real estate services to meet all your needs
          </Typography>

          <Grid container spacing={4}>
            <Grid item xs={12} sm={6} md={4}>
              <Paper elevation={2} sx={{ p: 3, height: '100%' }}>
                <Typography variant="h6" gutterBottom>
                  Property Sales
                </Typography>
                <Typography variant="body1">
                  Find your dream home with our extensive listings of residential properties.
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Paper elevation={2} sx={{ p: 3, height: '100%' }}>
                <Typography variant="h6" gutterBottom>
                  Property Rentals
                </Typography>
                <Typography variant="body1">
                  Discover rental properties that fit your lifestyle and budget requirements.
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Paper elevation={2} sx={{ p: 3, height: '100%' }}>
                <Typography variant="h6" gutterBottom>
                  Property Management
                </Typography>
                <Typography variant="body1">
                  Let us handle the complexities of managing your investment properties.
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Contact Section */}
      <Box sx={{ 
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=80)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: 'white',
        py: 8 
      }} id="contact">
        <Container>
          <Typography variant="h4" component="h2" gutterBottom align="center">
            Contact Us
          </Typography>
          <Typography variant="subtitle1" paragraph align="center" sx={{ mb: 4 }}>
            Have questions about a property or our services? Get in touch with our team.
          </Typography>
          
          <Grid container spacing={4}>
            <Grid item xs={12} md={7}>
              <Paper elevation={3} sx={{ p: 4, borderRadius: 2 }}>
                <ContactForm />
              </Paper>
            </Grid>
            
            <Grid item xs={12} md={5}>
              <Paper elevation={3} sx={{ p: 4, borderRadius: 2, bgcolor: 'rgba(255, 255, 255, 0.9)', color: 'text.primary' }}>
                <Typography variant="h5" gutterBottom sx={{ color: 'primary.main', fontWeight: 'bold' }}>
                  Our Offices
                </Typography>
                
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                  <Box>
                    <Typography variant="h6" gutterBottom>
                      Pune Office (Headquarters)
                    </Typography>
                    <Typography variant="body1">
                      123 Real Estate Street<br />
                      Koregaon Park, Pune 411001<br />
                      Maharashtra, India<br />
                      <strong>Phone:</strong> +91 98765 43210<br />
                      <strong>Email:</strong> pune@realestatefinder.com
                    </Typography>
                  </Box>
                  
                  <Box>
                    <Typography variant="h6" gutterBottom>
                      Mumbai Office
                    </Typography>
                    <Typography variant="body1">
                      456 Property Avenue<br />
                      Bandra West, Mumbai 400050<br />
                      Maharashtra, India<br />
                      <strong>Phone:</strong> +91 98765 43211<br />
                      <strong>Email:</strong> mumbai@realestatefinder.com
                    </Typography>
                  </Box>
                  
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
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default HomePage;