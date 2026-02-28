"use client";
import PortfolioClient from "../../components/PortfolioClient";

const projects = [
  {
    id: "res-1",
    title: "White Minimalist Villa",
    location: "Beverly Hills, CA",
    year: "2023",
    description: "A study in subtraction, this residence utilizes pure white planes and expansive glass to create a seamless boundary between interior luxury and the surrounding landscape.",
    cover: "/portfolio/res-1.jpg",
    gallery: [
      "/portfolio/res-1.jpg",
      "/portfolio/res-2.jpg",
      "/portfolio/res-3.jpg",
      "/portfolio/res-4.jpg",
      "/portfolio/com-1.jpg"
    ]
  },
  {
    id: "res-2",
    title: "Tropical Modern Retreat",
    location: "Bali, Indonesia",
    year: "2024",
    description: "Nestled in the jungle canopy, this home blends brutalist concrete structures with warm tropical wood and lush greenery.",
    cover: "/portfolio/res-2.jpg",
    gallery: [
      "/portfolio/res-2.jpg",
      "/portfolio/res-3.jpg",
      "/portfolio/res-4.jpg",
      "/portfolio/com-2.jpg",
      "/portfolio/res-1.jpg"
    ]
  },
  {
    id: "res-3",
    title: "The Glass Pavilion",
    location: "Copenhagen, Denmark",
    year: "2023",
    description: "Designed as a lightbox for a curator's art collection, this home features floor-to-ceiling structural glazing and a floating roof plane.",
    cover: "/portfolio/res-3.jpg",
    gallery: [
      "/portfolio/res-3.jpg",
      "/portfolio/res-4.jpg",
      "/portfolio/com-3.jpg",
      "/portfolio/res-1.jpg",
      "/portfolio/res-2.jpg"
    ]
  },
  {
    id: "res-4",
    title: "Suburban Equilibrium",
    location: "Austin, Texas",
    year: "2022",
    description: "Reimagining the suburban home, this project balances privacy with openness. A central courtyard brings light into the deep floor plan.",
    cover: "/portfolio/res-4.jpg",
    gallery: [
      "/portfolio/res-4.jpg",
      "/portfolio/com-4.jpg",
      "/portfolio/res-1.jpg",
      "/portfolio/res-2.jpg",
      "/portfolio/res-3.jpg"
    ]
  },
];

export default function Residential() {
  return <PortfolioClient projects={projects} category="Residential Projects" />;
}
