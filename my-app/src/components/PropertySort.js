import React from 'react';
import { FormControl, InputLabel, Select, MenuItem, Box } from '@mui/material';
import SortIcon from '@mui/icons-material/Sort';

const PropertySort = ({ sortOption, setSortOption }) => {
  const handleChange = (event) => {
    setSortOption(event.target.value);
  };

  return (
    <Box sx={{ 
      display: 'flex', 
      alignItems: 'center',
      minWidth: 220
    }}>
      <SortIcon sx={{ mr: 1, color: 'primary.main' }} />
      <FormControl fullWidth size="small" variant="outlined">
        <InputLabel id="sort-label">Sort By</InputLabel>
        <Select
          labelId="sort-label"
          id="sort-select"
          value={sortOption}
          label="Sort By"
          onChange={handleChange}
          sx={{ 
            '& .MuiOutlinedInput-notchedOutline': {
              borderColor: 'primary.light',
            },
            '&:hover .MuiOutlinedInput-notchedOutline': {
              borderColor: 'primary.main',
            }
          }}
        >
          <MenuItem value="price-asc">Price: Low to High</MenuItem>
          <MenuItem value="price-desc">Price: High to Low</MenuItem>
          <MenuItem value="newest">Newest First</MenuItem>
          <MenuItem value="bedrooms">Most Bedrooms</MenuItem>
          <MenuItem value="bathrooms">Most Bathrooms</MenuItem>
          <MenuItem value="size">Largest Size</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default PropertySort;