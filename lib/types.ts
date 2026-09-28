export type DifficultyLevel = "Beginner" | "Intermediate" | "Advanced" | "All Levels";

export interface Creator {
  id: string;
  name: string;
  handle: string;
  avatar: string;
  role: string;
  title: string;
  bio: string;
  productsCount: number;
  followersCount: number;
  rating: number;
  isVerified?: boolean;
}

export interface Lesson {
  id: string;
  title: string;
  duration: string;
  order: number;
  videoUrl?: string;
  isCompleted?: boolean;
  isLocked?: boolean;
  resourcesCount?: number;
  notes?: string;
}

export interface CourseModule {
  id: string;
  order: number;
  title: string;
  description?: string;
  lessons: Lesson[];
}

export interface Course {
  id: string;
  slug: string;
  title: string;
  subtitle?: string;
  description: string;
  thumbnail: string;
  previewVideoUrl?: string;
  price: number;
  billingPeriod: string;
  rating: number;
  reviewsCount: number;
  studentsCount: number;
  lessonsCount: number;
  totalDuration: string;
  commentsCount: number;
  difficulty: DifficultyLevel;
  category: string;
  featured?: boolean;
  popular?: boolean;
  creator: Creator;
  modules: CourseModule[];
  studentAvatars: string[];
  inclusions: string[];
  keyPoints: string[];
}

export interface Review {
  id: string;
  userName: string;
  userRole: string;
  userAvatar: string;
  rating: number;
  date: string;
  content: string;
  courseId: string;
  isVerified?: boolean;
}

export interface RatingBreakdown {
  average: number;
  totalReviews: number;
  distribution: {
    5: number;
    4: number;
    3: number;
    2: number;
    1: number;
  };
}

export interface Category {
  id: string;
  name: string;
  icon?: string;
  courseCount?: number;
  studentCount?: number;
  featured?: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  avatar: string;
  content: string;
  rating?: number;
}
