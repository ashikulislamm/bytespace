import type { Review, RatingBreakdown } from "@/lib/types";

export const courseRatingBreakdown: RatingBreakdown = {
  average: 4.7,
  totalReviews: 889,
  distribution: {
    5: 720,
    4: 120,
    3: 21,
    2: 12,
    1: 16,
  },
};

export const reviews: Review[] = [
  {
    id: "rev-1",
    courseId: "build-digital-asset",
    userName: "Albert Flores",
    userRole: "UI/UX Designer",
    userAvatar: "/images/reviewer-avatar-1.png",
    rating: 5,
    date: "a year ago",
    content:
      "This course transformed my approach to digital design. The combination of theory, hands-on exercises, and real-world applications made it a truly enriching experience. Excited to implement what I've learned!",
    isVerified: true,
  },
  {
    id: "rev-2",
    courseId: "build-digital-asset",
    userName: "Cody Fisher",
    userRole: "Product Designer",
    userAvatar: "/images/reviewer-avatar-2.png",
    rating: 5,
    date: "a year ago",
    content:
      "The project showcase and critique module created a collaborative environment where I could showcase my work, receive valuable feedback, and refine my skills. It added a unique and valuable dimension to the learning process.",
    isVerified: true,
  },
  {
    id: "rev-3",
    courseId: "build-digital-asset",
    userName: "Brooklyn Simmons",
    userRole: "Digital Creator",
    userAvatar: "/images/student-avatar-hero.png",
    rating: 5,
    date: "a year ago",
    content:
      "The lessons on optimizing digital assets for various platforms were particularly insightful. The course adapts to the evolving digital landscape, and the engaging content kept me motivated throughout.",
    isVerified: true,
  },
  {
    id: "rev-4",
    courseId: "build-digital-asset",
    userName: "Kathryn Murphy",
    userRole: "Frontend Developer",
    userAvatar: "/images/student-avatar-4.png",
    rating: 4,
    date: "8 months ago",
    content:
      "Super practical curriculum. The modules on asset optimization and design systems helped bridge the design-to-development handoff for our engineering team.",
    isVerified: true,
  },
];
