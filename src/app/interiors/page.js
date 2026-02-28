"use client";
import PortfolioClient from "../../components/PortfolioClient";

const projects = [
  {
    id: "int-1",
    title: "Nordic Minimal Apartment",
    location: "Stockholm, Sweden",
    year: "2024",
    description: "A functional, light-filled interior focusing on soft textures, natural woods, and a monochromatic palette to create a sense of calm and order.",
    cover: "/portfolio/int-cover.png",
    gallery: [
      "/portfolio/int-cover.png",
      "https://images.unsplash.com/photo-1616137466211-f939a420be84?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1615529182904-14819c35db37?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1615873968403-89e068629265?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1617103996702-96ff29b1c467?auto=format&fit=crop&w=1200&q=80"
    ]
  },
  {
    id: "int-2",
    title: "Industrial Loft Revival",
    location: "Brooklyn, NY",
    year: "2023",
    description: "Restoring the character of a historic loft space while inserting modern utility cores. The design highlights the original timber beams and brickwork.",
    cover: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1200&q=80",
      "/portfolio/int-cover.png",
      "https://images.unsplash.com/photo-1616486029423-aaa478965c96?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1556912998-c57cc6b63cd7?auto=format&fit=crop&w=1200&q=80"
    ]
  },
  {
    id: "int-3",
    title: "Zen Spa Sanctuary",
    location: "Kyoto, Japan",
    year: "2023",
    description: "An interior design for a wellness center that prioritizes acoustic comfort and tactile materials. Stone, water, and wood elements guide the visitor experience.",
    cover: "https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&w=1600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1515362778563-6a8d0e44bc0b?auto=format&fit=crop&w=1200&q=80",
      "/portfolio/int-cover.png",
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1591348276328-54b3c8aa5b63?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1552693673-1bf958298935?auto=format&fit=crop&w=1200&q=80"
    ]
  },
];

export default function Interiors() {
  return <PortfolioClient projects={projects} category="Interior Design" />;
}
