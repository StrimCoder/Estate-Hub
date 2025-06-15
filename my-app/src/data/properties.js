import additionalProperties from './additionalProperties';
import additionalProperties2 from './additionalProperties2';
import additionalProperties3 from './additionalProperties3';
import additionalProperties4 from './additionalProperties4';

const baseProperties = [
  {
    id: 1,
    title: "Modern Family Home",
    description: "Beautiful modern home with open floor plan, updated kitchen, and large backyard. Perfect for families looking for space and comfort in a friendly neighborhood.",
    price: 4500000,
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1560448204-603b3fc33ddc?auto=format&fit=crop&w=800&q=80"
    ],
    bedrooms: 4,
    bathrooms: 3,
    size: 2400,
    location: "Koregaon Park, Pune, Maharashtra",
    type: "house",
    status: "For Sale",
    features: ["Garage", "Swimming Pool", "Garden", "Central AC", "Fireplace"]
  },
  {
    id: 2,
    title: "Downtown Luxury Apartment",
    description: "Stunning luxury apartment in the heart of downtown with amazing city views, high-end finishes, and building amenities including gym and rooftop terrace.",
    price: 25000,
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=800&q=80"
    ],
    bedrooms: 2,
    bathrooms: 2,
    size: 1200,
    location: "Bandra West, Mumbai, Maharashtra",
    type: "apartment",
    status: "For Rent",
    features: ["Doorman", "Elevator", "Gym", "Balcony", "In-unit Laundry"]
  },
  {
    id: 3,
    title: "Suburban Townhouse",
    description: "Spacious townhouse in a quiet suburban area with modern amenities, attached garage, and private patio. Close to schools, parks, and shopping centers.",
    price: 3200000,
    image: "https://images.unsplash.com/photo-1576941089067-2de3c901e126?auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1576941089067-2de3c901e126?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=800&q=80"
    ],
    bedrooms: 3,
    bathrooms: 2.5,
    size: 1800,
    location: "Aundh, Pune, Maharashtra",
    type: "townhouse",
    status: "For Sale",
    features: ["Garage", "Patio", "Fireplace", "Community Pool", "Near Schools"]
  },
  {
    id: 4,
    title: "Luxury Waterfront Condo",
    description: "Exclusive waterfront condo with panoramic views, high-end finishes, and resort-style amenities. Experience luxury living with concierge services and private beach access.",
    price: 8750000,
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1536376072261-38c75010e6c9?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=800&q=80"
    ],
    bedrooms: 3,
    bathrooms: 3,
    size: 2200,
    location: "Worli Sea Face, Mumbai, Maharashtra",
    type: "condo",
    status: "For Sale",
    features: ["Waterfront", "Balcony", "Pool", "Gym", "24/7 Security"]
  },
  {
    id: 5,
    title: "Cozy Studio Apartment",
    description: "Charming studio apartment in a vibrant neighborhood with modern finishes, efficient layout, and great natural light. Perfect for young professionals or students.",
    price: 12000,
    image: "https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?auto=format&fit=crop&w=800&q=80"
    ],
    bedrooms: 0,
    bathrooms: 1,
    size: 500,
    location: "Viman Nagar, Pune, Maharashtra",
    type: "apartment",
    status: "For Rent",
    features: ["Furnished", "Utilities Included", "Laundry Facility", "Bike Storage", "Pet Friendly"]
  },
  {
    id: 6,
    title: "Historic Victorian Home",
    description: "Beautifully restored Victorian home with original details, modern updates, and spacious rooms. Features include hardwood floors, crown molding, and a wrap-around porch.",
    price: 7500000,
    image: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=800&q=80"
    ],
    bedrooms: 5,
    bathrooms: 3,
    size: 3200,
    location: "College Road, Nashik, Maharashtra",
    type: "house",
    status: "For Sale",
    features: ["Historic", "Hardwood Floors", "Wrap-around Porch", "Fireplace", "Large Yard"]
  },
  {
    id: 7,
    title: "Spacious Family Villa",
    description: "Elegant villa with spacious living areas, modern kitchen, and beautiful garden. Perfect for large families with its multiple bedrooms and entertainment spaces.",
    price: 6800000,
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600607687644-aaca8f1a8275?auto=format&fit=crop&w=800&q=80"
    ],
    bedrooms: 5,
    bathrooms: 4,
    size: 3800,
    location: "Gangapur Road, Nashik, Maharashtra",
    type: "house",
    status: "For Sale",
    features: ["Swimming Pool", "Garden", "Home Theater", "Double Garage", "Outdoor Kitchen"]
  },
  {
    id: 8,
    title: "Modern Apartment with Garden View",
    description: "Contemporary apartment with open floor plan, modern finishes, and a private balcony overlooking beautiful gardens. Located in a secure complex with amenities.",
    price: 18000,
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1560185127-6ed189bf02f4?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1560185007-5f0bb1866cab?auto=format&fit=crop&w=800&q=80"
    ],
    bedrooms: 2,
    bathrooms: 2,
    size: 1100,
    location: "Pimpri-Chinchwad, Pune, Maharashtra",
    type: "apartment",
    status: "For Rent",
    features: ["Balcony", "Garden View", "Gym Access", "Parking", "24/7 Security"]
  },
  {
    id: 9,
    title: "Traditional Bungalow",
    description: "Charming traditional bungalow with character and modern conveniences. Features a spacious veranda, lush garden, and comfortable living spaces in a peaceful neighborhood.",
    price: 4200000,
    image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1599427303058-f04cbcf4756f?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=800&q=80"
    ],
    bedrooms: 3,
    bathrooms: 2,
    size: 1600,
    location: "Ganesh Peth, Parbhani, Maharashtra",
    type: "house",
    status: "For Sale",
    features: ["Veranda", "Garden", "Storage Shed", "Fruit Trees", "Well Water"]
  },
  {
    id: 10,
    title: "Luxury Penthouse",
    description: "Spectacular penthouse with panoramic city views, premium finishes, and private terrace. This exclusive residence offers the ultimate in luxury urban living.",
    price: 15000000,
    image: "https://images.unsplash.com/photo-1567767292278-a4f21aa2d36e?auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1567767292278-a4f21aa2d36e?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=800&q=80"
    ],
    bedrooms: 4,
    bathrooms: 4.5,
    size: 3500,
    location: "Malabar Hill, Mumbai, Maharashtra",
    type: "apartment",
    status: "For Sale",
    features: ["Private Terrace", "Panoramic Views", "Smart Home System", "Wine Cellar", "Private Elevator"]
  },
  {
    id: 11,
    title: "Riverside Cottage",
    description: "Peaceful riverside cottage with rustic charm and modern comforts. Enjoy nature with direct river access, outdoor seating areas, and beautiful surroundings.",
    price: 2800000,
    image: "https://images.unsplash.com/photo-1575517111839-3a3843ee7f5d?auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1575517111839-3a3843ee7f5d?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1599809275671-b5942cabc7a2?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600210491369-e753d80a41f3?auto=format&fit=crop&w=800&q=80"
    ],
    bedrooms: 2,
    bathrooms: 1,
    size: 1200,
    location: "Godavari River, Nashik, Maharashtra",
    type: "house",
    status: "For Sale",
    features: ["River Access", "Outdoor Deck", "Fireplace", "Wooden Interiors", "Boat Dock"]
  },
  {
    id: 12,
    title: "Commercial Office Space",
    description: "Prime commercial office space in a prestigious business district. Modern building with professional amenities, ideal for businesses looking for a central location.",
    price: 35000,
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=800&q=80"
    ],
    bedrooms: 0,
    bathrooms: 2,
    size: 2000,
    location: "Hinjewadi IT Park, Pune, Maharashtra",
    type: "commercial",
    status: "For Rent",
    features: ["Conference Room", "Reception Area", "Parking", "High-speed Internet", "24/7 Access"]
  }
];

// Combine all property arrays
const properties = [
  ...baseProperties,
  ...additionalProperties,
  ...additionalProperties2,
  ...additionalProperties3,
  ...additionalProperties4
];

export default properties;