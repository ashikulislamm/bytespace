import type { Creator } from "@/lib/types";

export const creators: Creator[] = [
  {
    id: "purepearl-studio",
    name: "PurePearl Studio",
    handle: "@purepearl",
    avatar: "/images/creator-avatar.png",
    role: "Professional Creator",
    title: "Passionate UI/UX, Web designer",
    bio: "Welcome to the creative world of PurePearl Studio. Here, you'll discover the passion, expertise, and inspiration that drive my creative journey. Let's explore and learn together!\n\nDive into my creative portfolio, showcasing a glimpse of my artistic endeavors. From digital designs to multimedia projects, each piece tells a unique story. Explore the world of creativity with me.",
    productsCount: 3,
    followersCount: 12,
    rating: 4.8,
    isVerified: true,
  },
  {
    id: "albert-flores",
    name: "Albert Flores",
    handle: "@albertflores",
    avatar: "/images/reviewer-avatar-1.png",
    role: "Senior UX Designer",
    title: "Product Designer & Mentor",
    bio: "Passionate about creating accessible, human-centric design systems and mentoring next-generation creators.",
    productsCount: 5,
    followersCount: 340,
    rating: 4.9,
    isVerified: true,
  },
  {
    id: "cody-fisher",
    name: "Cody Fisher",
    handle: "@codyfisher",
    avatar: "/images/reviewer-avatar-2.png",
    role: "Digital Artist",
    title: "Creative Technologist",
    bio: "Exploring the boundary between generative media, vector precision, and web engineering.",
    productsCount: 4,
    followersCount: 195,
    rating: 4.7,
    isVerified: true,
  },
];

export const primaryCreator = creators[0];
