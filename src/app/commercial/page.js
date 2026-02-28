"use client";
import PortfolioClient from "../../components/PortfolioClient";

const projects = [
  {
    id: "com-1",
    title: "Apex Corporate Center",
    location: "New York, NY",
    year: "2024",
    description: "A flagship headquarters designed to foster collaboration and transparency. The glass curtain wall reflects the city skyline.",
    cover: "/portfolio/com-1.jpg",
    gallery: [
      "/portfolio/com-1.jpg",
      "/portfolio/com-2.jpg",
      "/portfolio/com-3.jpg",
      "/portfolio/com-4.jpg",
      "/portfolio/res-3.jpg" // Mix some high quality assets
    ]
  },
  {
    id: "com-2",
    title: "The Hive Coworking",
    location: "Berlin, Germany",
    year: "2023",
    description: "Adaptive reuse of an industrial warehouse into a vibrant coworking ecosystem. Exposed brick and steel meet polished concrete.",
    cover: "/portfolio/com-2.jpg",
    gallery: [
      "/portfolio/com-2.jpg",
      "/portfolio/com-3.jpg",
      "/portfolio/com-4.jpg",
      "/portfolio/res-4.jpg",
      "/portfolio/com-1.jpg"
    ]
  },
  {
    id: "com-3",
    title: "UrbanRetail Plaza",
    location: "Tokyo, Japan",
    year: "2023",
    description: "A high-end retail complex exploring verticality in a dense urban fabric. The façade features dynamic LED lighting.",
    cover: "/portfolio/com-3.jpg",
    gallery: [
      "/portfolio/com-3.jpg",
      "/portfolio/com-4.jpg",
      "/portfolio/res-2.jpg",
      "/portfolio/com-1.jpg",
      "/portfolio/com-2.jpg"
    ]
  },
];

export default function Commercial() {
  return <PortfolioClient projects={projects} category="Commercial Projects" />;
}
