import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import {
  HeroSection,
  PartnerCarousel,
  FeaturedCoursesSection,
  LearningPathsSection,
  ValuePropositionSection,
  CreatorCtaSection,
  TestimonialsSection,
} from "@/components/sections";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-white overflow-x-hidden">
      {/* 1. Global Navigation Bar */}
      <Navbar variant="light-on-blue" />

      {/* 2. Hero Section (#1:1695) */}
      <HeroSection />

      {/* 3. Partner & Trust Infinite Carousel (#1:1794) */}
      <PartnerCarousel />

      {/* 4. Featured Categories & Popular Courses (#12:101 & #33:683) */}
      <FeaturedCoursesSection />

      {/* 5. Explore Diverse Learning Paths */}
      <LearningPathsSection />

      {/* 6. Value Proposition & Learning Dashboard Showcase (#34:1159) */}
      <ValuePropositionSection />

      {/* 7. Creator Recruitment CTA Section (#34:1161) */}
      <CreatorCtaSection />

      {/* 8. Testimonials Section (#34:1175) */}
      <TestimonialsSection />

      {/* 9. Global Multi-Column Footer (#34:1256) */}
      <Footer />
    </div>
  );
}
