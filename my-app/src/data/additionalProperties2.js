const additionalProperties2 = [
  {
    id: 23,
    title: "Riverside Apartment in Karad",
    description: "Beautiful apartment with river views, modern amenities, and peaceful surroundings.",
    price: 3200000,
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=80"
    ],
    bedrooms: 2,
    bathrooms: 2,
    size: 1100,
    location: "Krishna River Road, Karad, Maharashtra",
    type: "apartment",
    status: "For Sale",
    features: ["River View", "Balcony", "Parking", "Security", "Garden Access"]
  },
  {
    id: 24,
    title: "Heritage Home in Kolhapur",
    description: "Restored heritage property with traditional architecture and modern comforts in historic area.",
    price: 7800000,
    image: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=800&q=80"
    ],
    bedrooms: 4,
    bathrooms: 3,
    size: 2800,
    location: "Mahalaxmi Temple Road, Kolhapur, Maharashtra",
    type: "house",
    status: "For Sale",
    features: ["Heritage Structure", "Courtyard", "Wooden Interiors", "Traditional Design", "Modern Amenities"]
  },
  {
    id: 25,
    title: "Farmhouse in Alibaug",
    description: "Spacious farmhouse with lush gardens, swimming pool, and outdoor entertainment areas near the beach.",
    price: 15000000,
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80"
    ],
    bedrooms: 5,
    bathrooms: 4,
    size: 4000,
    location: "Mandwa Beach Road, Alibaug, Maharashtra",
    type: "house",
    status: "For Sale",
    features: ["Swimming Pool", "Garden", "Beach Access", "Guest House", "Outdoor Kitchen"]
  },
  {
    id: 26,
    title: "Modern Flat in Nagpur",
    description: "Contemporary apartment with open floor plan, modern finishes, and community amenities in a developing area.",
    price: 3500000,
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1560185127-6ed189bf02f4?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1560185127-6ed189bf02f4?auto=format&fit=crop&w=800&q=80"
    ],
    bedrooms: 3,
    bathrooms: 2,
    size: 1400,
    location: "Civil Lines, Nagpur, Maharashtra",
    type: "apartment",
    status: "For Sale",
    features: ["Modular Kitchen", "Balcony", "Gym Access", "Children's Play Area", "Covered Parking"]
  },
  {
    id: 27,
    title: "Luxury Villa in Lavasa",
    description: "Exclusive villa with panoramic lake views, premium finishes, and resort-style amenities in a planned city.",
    price: 18000000,
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1536376072261-38c75010e6c9?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1536376072261-38c75010e6c9?auto=format&fit=crop&w=800&q=80"
    ],
    bedrooms: 4,
    bathrooms: 4.5,
    size: 3600,
    location: "Lakeside, Lavasa, Maharashtra",
    type: "house",
    status: "For Sale",
    features: ["Lake View", "Private Pool", "Terrace Garden", "Smart Home", "Home Theater"]
  },
  {
    id: 28,
    title: "Budget Home in Solapur",
    description: "Affordable family home with essential amenities in a residential neighborhood, ideal for first-time buyers.",
    price: 2200000,
    image: "https://images.unsplash.com/photo-1576941089067-2de3c901e126?auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1576941089067-2de3c901e126?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=800&q=80"
    ],
    bedrooms: 2,
    bathrooms: 2,
    size: 1000,
    location: "Vijapur Road, Solapur, Maharashtra",
    type: "house",
    status: "For Sale",
    features: ["Garden", "Parking", "Water Tank", "Near Market", "Security"]
  },
  {
    id: 29,
    title: "Rental Apartment in Thane",
    description: "Well-maintained apartment with modern amenities in a family-friendly community with good connectivity.",
    price: 18000,
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1560448204-603b3fc33ddc?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1560448204-603b3fc33ddc?auto=format&fit=crop&w=800&q=80"
    ],
    bedrooms: 2,
    bathrooms: 2,
    size: 950,
    location: "Ghodbunder Road, Thane West, Maharashtra",
    type: "apartment",
    status: "For Rent",
    features: ["Gym", "Swimming Pool", "Children's Play Area", "Clubhouse", "Security"]
  },
  {
    id: 30,
    title: "Commercial Shop in Aurangabad",
    description: "Prime retail space in busy commercial area with high footfall and excellent visibility.",
    price: 35000,
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=800&q=80"
    ],
    bedrooms: 0,
    bathrooms: 1,
    size: 800,
    location: "Jalna Road, Aurangabad, Maharashtra",
    type: "commercial",
    status: "For Rent",
    features: ["Main Road", "Display Window", "Storage", "Parking", "24/7 Access"]
  },
  {
    id: 31,
    title: "Retirement Home in Mahabaleshwar",
    description: "Peaceful property with garden, mountain views, and comfortable living spaces in a hill station.",
    price: 6500000,
    image: "https://images.unsplash.com/photo-1575517111839-3a3843ee7f5d?auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1575517111839-3a3843ee7f5d?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1599809275671-b5942cabc7a2?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1599809275671-b5942cabc7a2?auto=format&fit=crop&w=800&q=80"
    ],
    bedrooms: 3,
    bathrooms: 2,
    size: 1800,
    location: "Panchgani Road, Mahabaleshwar, Maharashtra",
    type: "house",
    status: "For Sale",
    features: ["Mountain View", "Garden", "Fireplace", "Quiet Location", "Fruit Trees"]
  },
  {
    id: 32,
    title: "Beachfront Villa in Ratnagiri",
    description: "Exclusive beachfront property with private access to the beach, panoramic sea views, and luxury amenities.",
    price: 22000000,
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1536376072261-38c75010e6c9?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1536376072261-38c75010e6c9?auto=format&fit=crop&w=800&q=80"
    ],
    bedrooms: 5,
    bathrooms: 5,
    size: 4500,
    location: "Ganpatipule Beach, Ratnagiri, Maharashtra",
    type: "house",
    status: "For Sale",
    features: ["Beachfront", "Private Pool", "Outdoor Deck", "Garden", "Guest House"]
  }
];

export default additionalProperties2;