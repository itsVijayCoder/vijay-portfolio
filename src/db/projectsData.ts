import cookingNotesLandingPage from "@/assets/images/cookingnotes.png";
import mediClientLandingPage from "@/assets/images/medi-client.png";
import portfolioLandingPage from "@/assets/images/portfolio.png";

export const portfolioProjects = [
  {
    company: "Project - 1",
    year: "2023",
    title: "Medi Client Landing Page",
    results: [
      { title: "Enhanced user experience by 40%" },
      { title: "Book appointments in real-time" },
      { title: "Search doctors by specialty and location" },
      { title: "Easy access to medical records" },
    ],
    link: "https://tomvj1258.github.io/doctor-booking-vite/",
    image: mediClientLandingPage,
  },
  {
    company: "Project - 2",
    year: "2023",
    title: "Tasty Bites Landing Page",
    results: [
      { title: "Search recipes by ingredient and cuisine" },
      { title: "Save and organize favorite recipes" },
      { title: "Step-by-step cooking instructions" },
      { title: "Rating and review system for recipes" },
    ],
    link: "https://cookingnotes-frontend.onrender.com/",
    image: cookingNotesLandingPage,
  },
  {
    company: "Project - 3",
    year: "2024",
    title: "My Portfolio Landing Page",
    results: [
      { title: "Enhanced user experience by 50%" },
      { title: "Improved site speed by 50%" },
      { title: "Showcase projects with images and descriptions" },
      { title: "Responsive design for mobile and desktop" },
    ],
    link: "https://vijay-dev-portfolio.vercel.app/",
    image: portfolioLandingPage,
  },
];
