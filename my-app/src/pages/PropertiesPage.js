import React, { useState, useMemo } from 'react';
import { Container, Grid, Box, Typography, Pagination } from '@mui/material';
import PropertyCard from '../components/PropertyCard';
import PropertyFilter from '../components/PropertyFilter';
import PropertySort from '../components/PropertySort';
import properties from '../data/properties';

const PropertiesPage = () => {
  const [filters, setFilters] = useState({
    type: 'all',
    bedrooms: 'any',
    bathrooms: 'any',
    price: [0, 2000000],
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
    <Container sx={{ py: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Property Listings
      </Typography>
      
      <PropertyFilter filters={filters} setFilters={setFilters} />
      
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
        <Typography variant="body1">
          {sortedProperties.length} properties found
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
  );
};

export default PropertiesPage;