import cookingNotesLandingPage from "@/assets/images/cookingnotes.png";
import mediClientLandingPage from "@/assets/images/medi-client.png";
import portfolioLandingPage from "@/assets/images/portfolio.png";
import zentryLandingPage from "@/assets/images/zentry-clone.png";
import { Type } from "lucide-react";

export const portfolioProjects = [
  {
    company: "Project - 4",
    year: "2025",
    stack: "Frontend -(ANIMATION)",
    title: "Zentry Clone Landing Page",
    results: [
      { title: "Smooth scroll animations with GSAP" },
      { title: "Fast, responsive design using Tailwind CSS" },
      { title: "50% faster load times after optimizations" },
      { title: "Mobile-friendly layout with no broken UI" },
    ],
    techStack: ["React", "GSAP", "Tailwind CSS", "Vercel"],
    link: "https://zentry-clone-vs.vercel.app/",
    image: zentryLandingPage,
  },
  {
    company: "Project - 3",
    year: "2024",
    stack: "Frontend",
    title: "Portfolio Landing Page",
    results: [
      { title: "Enhanced user experience by 50%" },
      { title: "Improved site speed by 50%" },
      { title: "Showcase projects with images and descriptions" },
      { title: "Responsive design for mobile and desktop" },
    ],
    techStack: ["Next.js", "Tailwind CSS", "TypeScript", "Framer Motion"],
    link: "https://vijay-dev-portfolio.vercel.app/",
    image: portfolioLandingPage,
  },
  {
    company: "Project - 2",
    year: "2023",
    stack: "Full-Stack",
    title: "Tasty Bites Landing Page",
    results: [
      { title: "Search recipes by ingredient and cuisine" },
      { title: "Save and organize favorite recipes" },
      { title: "Step-by-step cooking instructions" },
      { title: "Rating and review system for recipes" },
    ],
    techStack: ["React.js", "Tailwind CSS", "Node.js", "MongoDB", "Express.js"],
    link: "https://cookingnotes-frontend.onrender.com/",
    image: cookingNotesLandingPage,
  },
  {
    company: "Project - 1",
    year: "2023",
    stack: "Frontend",
    title: "Medi Client Landing Page",
    results: [
      { title: "Enhanced user experience by 40%" },
      { title: "Book appointments in real-time" },
      { title: "Search doctors by specialty and location" },
      { title: "Easy access to medical records" },
    ],
    techStack: ["React.js", "Tailwind CSS", "GitHub Pages"],
    link: "https://itsVijayCoder.github.io/doctor-booking-vite/",
    image: mediClientLandingPage,
  },
];
