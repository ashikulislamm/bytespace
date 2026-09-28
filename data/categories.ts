import type { Category } from "@/lib/types";

export const categories: Category[] = [
  { id: "featured", name: "Featured", featured: true, courseCount: 45 },
  { id: "ui-ux", name: "UI/UX Design", featured: true, courseCount: 200, studentCount: 1000 },
  { id: "design", name: "Design", featured: true, courseCount: 180 },
  { id: "development", name: "Development", featured: true, courseCount: 150 },
  { id: "it-software", name: "IT & Software", featured: true, courseCount: 95 },
  { id: "business", name: "Business", featured: true, courseCount: 110 },
  { id: "marketing", name: "Marketing", featured: true, courseCount: 85 },
  { id: "photography", name: "Photography", featured: true, courseCount: 65 },
  { id: "music", name: "Music", courseCount: 40 },
  { id: "drawing-painting", name: "Drawing & Painting", courseCount: 55 },
  { id: "animation", name: "Animation", courseCount: 48 },
  { id: "social-media", name: "Social Media", courseCount: 72 },
  { id: "creative-marketing", name: "Creative Marketing", courseCount: 60 },
  { id: "digital-illustration", name: "Digital Illustration", courseCount: 82 },
  { id: "film-video", name: "Film & Video", courseCount: 50 },
  { id: "crafts", name: "Crafts", courseCount: 35 },
  { id: "freelance", name: "Freelance & Entrepreneurship", courseCount: 90 },
  { id: "graphic-design", name: "Graphic Design", courseCount: 130 },
  { id: "productivity", name: "Productivity", courseCount: 64 },
  { id: "web-development", name: "Web Development", courseCount: 140 },
  { id: "data-science", name: "Data Science", courseCount: 58 },
  { id: "cooking", name: "Cooking", courseCount: 28 },
];

export const featuredCategoryTabs = [
  "Featured",
  "Music",
  "Drawing & Painting",
  "Marketing",
  "Animation",
  "Social Media",
  "UI/UX Design",
  "Creative Marketing",
];
