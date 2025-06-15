const additionalProperties = [
  {
    id: 13,
    title: "Elegant Villa in Koregaon Park",
    description: "Luxurious villa with modern amenities, spacious rooms, and beautiful garden in an upscale neighborhood.",
    price: 9500000,
    image: "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1613977257592-4b5c2f9f4656?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1613977257592-4b5c2f9f4656?auto=format&fit=crop&w=800&q=80"
    ],
    bedrooms: 5,
    bathrooms: 5.5,
    size: 4200,
    location: "North Main Road, Koregaon Park, Pune, Maharashtra",
    type: "house",
    status: "For Sale",
    features: ["Swimming Pool", "Home Theater", "Garden", "Smart Home", "Security System"]
  },
  {
    id: 14,
    title: "Budget Apartment in Kothrud",
    description: "Affordable apartment with essential amenities in a well-connected neighborhood, perfect for small families or working professionals.",
    price: 2800000,
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1560185127-6ed189bf02f4?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1560185127-6ed189bf02f4?auto=format&fit=crop&w=800&q=80"
    ],
    bedrooms: 2,
    bathrooms: 1,
    size: 850,
    location: "Kothrud, Pune, Maharashtra",
    type: "apartment",
    status: "For Sale",
    features: ["Lift", "Parking", "Security", "Power Backup", "Park"]
  },
  {
    id: 15,
    title: "Spacious Flat in Andheri West",
    description: "Well-ventilated apartment with modern amenities in a prime location close to metro station and shopping centers.",
    price: 15000,
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1560448204-603b3fc33ddc?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1560448204-603b3fc33ddc?auto=format&fit=crop&w=800&q=80"
    ],
    bedrooms: 3,
    bathrooms: 2,
    size: 1200,
    location: "Andheri West, Mumbai, Maharashtra",
    type: "apartment",
    status: "For Rent",
    features: ["Gym", "Swimming Pool", "Children's Play Area", "Club House", "24/7 Security"]
  },
  {
    id: 16,
    title: "Luxury Apartment in Powai",
    description: "Premium apartment with high-end finishes, lake view, and resort-style amenities in an upscale neighborhood.",
    price: 7500000,
    image: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?auto=format&fit=crop&w=800&q=80"
    ],
    bedrooms: 3,
    bathrooms: 3,
    size: 1800,
    location: "Powai, Mumbai, Maharashtra",
    type: "apartment",
    status: "For Sale",
    features: ["Lake View", "Modular Kitchen", "Gym", "Swimming Pool", "Clubhouse"]
  },
  {
    id: 17,
    title: "Vineyard Estate in Nashik",
    description: "Unique property with vineyard, farmhouse, and panoramic views of the surrounding countryside.",
    price: 12000000,
    image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1599427303058-f04cbcf4756f?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1599427303058-f04cbcf4756f?auto=format&fit=crop&w=800&q=80"
    ],
    bedrooms: 4,
    bathrooms: 3,
    size: 3500,
    location: "Sula Road, Nashik, Maharashtra",
    type: "house",
    status: "For Sale",
    features: ["Vineyard", "Wine Cellar", "Outdoor Kitchen", "Guest House", "Mountain View"]
  },
  {
    id: 18,
    title: "Affordable Home in Parbhani",
    description: "Comfortable family home with garden in a peaceful neighborhood, close to schools and markets.",
    price: 1800000,
    image: "https://images.unsplash.com/photo-1576941089067-2de3c901e126?auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1576941089067-2de3c901e126?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=800&q=80"
    ],
    bedrooms: 3,
    bathrooms: 2,
    size: 1200,
    location: "Civil Lines, Parbhani, Maharashtra",
    type: "house",
    status: "For Sale",
    features: ["Garden", "Car Parking", "Water Tank", "Near School", "Quiet Neighborhood"]
  },
  {
    id: 19,
    title: "Commercial Space in Hinjewadi",
    description: "Modern office space in IT hub with excellent connectivity and business infrastructure.",
    price: 45000,
    image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80"
    ],
    bedrooms: 0,
    bathrooms: 2,
    size: 2500,
    location: "Phase 2, Hinjewadi IT Park, Pune, Maharashtra",
    type: "commercial",
    status: "For Rent",
    features: ["IT Infrastructure", "Conference Room", "Cafeteria", "24/7 Access", "Parking"]
  },
  {
    id: 20,
    title: "Penthouse in Juhu",
    description: "Exclusive penthouse with sea view, private terrace, and luxury amenities in a premium location.",
    price: 25000000,
    image: "https://images.unsplash.com/photo-1567767292278-a4f21aa2d36e?auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1567767292278-a4f21aa2d36e?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?auto=format&fit=crop&w=800&q=80"
    ],
    bedrooms: 4,
    bathrooms: 4.5,
    size: 3800,
    location: "Juhu Beach, Mumbai, Maharashtra",
    type: "apartment",
    status: "For Sale",
    features: ["Sea View", "Private Terrace", "Jacuzzi", "Home Automation", "Private Elevator"]
  },
  {
    id: 21,
    title: "Bungalow in Lonavala",
    description: "Vacation home with mountain views, garden, and outdoor entertainment areas in a popular hill station.",
    price: 8500000,
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80"
    ],
    bedrooms: 4,
    bathrooms: 3,
    size: 2800,
    location: "Tungarli, Lonavala, Maharashtra",
    type: "house",
    status: "For Sale",
    features: ["Mountain View", "Garden", "Barbecue Area", "Parking", "Security"]
  },
  {
    id: 22,
    title: "Studio Apartment in Vashi",
    description: "Compact studio apartment with modern design, perfect for young professionals or students.",
    price: 9000,
    image: "https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&q=80"
    ],
    bedrooms: 0,
    bathrooms: 1,
    size: 450,
    location: "Sector 17, Vashi, Navi Mumbai, Maharashtra",
    type: "apartment",
    status: "For Rent",
    features: ["Furnished", "AC", "Lift", "Security", "Near Station"]
  }
];

export default additionalProperties;