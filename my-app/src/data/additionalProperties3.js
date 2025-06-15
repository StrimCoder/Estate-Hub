const additionalProperties3 = [
  {
    id: 33,
    title: "Luxury Apartment in Dadar",
    description: "Premium apartment with high-end finishes, city views, and exclusive amenities in central Mumbai.",
    price: 12500000,
    image: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?auto=format&fit=crop&w=800&q=80"
    ],
    bedrooms: 3,
    bathrooms: 3,
    size: 1600,
    location: "Dadar West, Mumbai, Maharashtra",
    type: "apartment",
    status: "For Sale",
    features: ["City View", "Modular Kitchen", "Gym", "Swimming Pool", "Clubhouse"]
  },
  {
    id: 34,
    title: "Affordable Home in Akola",
    description: "Budget-friendly family home with essential amenities in a developing neighborhood.",
    price: 1800000,
    image: "https://images.unsplash.com/photo-1576941089067-2de3c901e126?auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1576941089067-2de3c901e126?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1599427303058-f04cbcf4756f?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1599427303058-f04cbcf4756f?auto=format&fit=crop&w=800&q=80"
    ],
    bedrooms: 2,
    bathrooms: 1,
    size: 900,
    location: "Civil Lines, Akola, Maharashtra",
    type: "house",
    status: "For Sale",
    features: ["Garden", "Parking", "Water Tank", "Near School", "Security"]
  },
  {
    id: 35,
    title: "Modern Apartment in Kalyan",
    description: "Contemporary apartment with open floor plan, modern finishes, and community amenities.",
    price: 4200000,
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1560185127-6ed189bf02f4?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1560185127-6ed189bf02f4?auto=format&fit=crop&w=800&q=80"
    ],
    bedrooms: 2,
    bathrooms: 2,
    size: 1050,
    location: "Kalyan West, Maharashtra",
    type: "apartment",
    status: "For Sale",
    features: ["Modular Kitchen", "Balcony", "Gym Access", "Children's Play Area", "Covered Parking"]
  },
  {
    id: 36,
    title: "Riverside Bungalow in Wai",
    description: "Charming bungalow with river views, garden, and traditional architecture in a historic town.",
    price: 5500000,
    image: "https://images.unsplash.com/photo-1575517111839-3a3843ee7f5d?auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1575517111839-3a3843ee7f5d?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1599809275671-b5942cabc7a2?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1599809275671-b5942cabc7a2?auto=format&fit=crop&w=800&q=80"
    ],
    bedrooms: 3,
    bathrooms: 2,
    size: 1800,
    location: "Krishna River Road, Wai, Maharashtra",
    type: "house",
    status: "For Sale",
    features: ["River View", "Garden", "Traditional Architecture", "Fruit Trees", "Quiet Location"]
  },
  {
    id: 37,
    title: "Luxury Villa in Khandala",
    description: "Exclusive hill station villa with panoramic valley views, premium finishes, and resort-style amenities.",
    price: 16000000,
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80"
    ],
    bedrooms: 4,
    bathrooms: 4.5,
    size: 3800,
    location: "Valley View Road, Khandala, Maharashtra",
    type: "house",
    status: "For Sale",
    features: ["Valley View", "Private Pool", "Terrace Garden", "Smart Home", "Home Theater"]
  },
  {
    id: 38,
    title: "Commercial Space in Pune CBD",
    description: "Prime office space in central business district with modern infrastructure and excellent connectivity.",
    price: 55000,
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=800&q=80"
    ],
    bedrooms: 0,
    bathrooms: 3,
    size: 3000,
    location: "FC Road, Pune, Maharashtra",
    type: "commercial",
    status: "For Rent",
    features: ["Conference Rooms", "Reception Area", "Cafeteria", "Parking", "24/7 Access"]
  },
  {
    id: 39,
    title: "Rental Flat in Kharghar",
    description: "Well-maintained apartment with modern amenities in a family-friendly community with good connectivity.",
    price: 16000,
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1560448204-603b3fc33ddc?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1560448204-603b3fc33ddc?auto=format&fit=crop&w=800&q=80"
    ],
    bedrooms: 2,
    bathrooms: 2,
    size: 1050,
    location: "Sector 35, Kharghar, Navi Mumbai, Maharashtra",
    type: "apartment",
    status: "For Rent",
    features: ["Gym", "Swimming Pool", "Children's Play Area", "Clubhouse", "Security"]
  },
  {
    id: 40,
    title: "Farmhouse in Karjat",
    description: "Spacious farmhouse with lush gardens, swimming pool, and outdoor entertainment areas in a scenic location.",
    price: 9500000,
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80"
    ],
    bedrooms: 4,
    bathrooms: 3,
    size: 3200,
    location: "Neral Road, Karjat, Maharashtra",
    type: "house",
    status: "For Sale",
    features: ["Swimming Pool", "Garden", "Mountain View", "Guest House", "Outdoor Kitchen"]
  },
  {
    id: 41,
    title: "Budget Apartment in Sangli",
    description: "Affordable apartment with essential amenities in a well-connected neighborhood, perfect for small families.",
    price: 2200000,
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=80"
    ],
    bedrooms: 2,
    bathrooms: 1,
    size: 850,
    location: "Miraj Road, Sangli, Maharashtra",
    type: "apartment",
    status: "For Sale",
    features: ["Lift", "Parking", "Security", "Power Backup", "Park"]
  },
  {
    id: 42,
    title: "Luxury Apartment in South Mumbai",
    description: "Exclusive apartment in premium location with high-end finishes, sea views, and world-class amenities.",
    price: 35000000,
    image: "https://images.unsplash.com/photo-1567767292278-a4f21aa2d36e?auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1567767292278-a4f21aa2d36e?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?auto=format&fit=crop&w=800&q=80"
    ],
    bedrooms: 4,
    bathrooms: 4.5,
    size: 3200,
    location: "Cuffe Parade, Mumbai, Maharashtra",
    type: "apartment",
    status: "For Sale",
    features: ["Sea View", "Private Terrace", "Jacuzzi", "Home Automation", "Private Elevator"]
  }
];

export default additionalProperties3;