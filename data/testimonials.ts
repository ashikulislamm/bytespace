import type { Testimonial } from "@/lib/types";

export const testimonials: Testimonial[] = [
  {
    id: "test-1",
    name: "Sarah M.",
    role: "Enthusiastic Learner",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=160&h=160&fit=crop&crop=faces",
    content:
      "ByteSpace has completely elevated my learning routine. The quality of instructors and depth of the courses gave me actionable skills I use daily in my workflow. The community is exceptionally supportive.",
    rating: 5,
  },
  {
    id: "test-2",
    name: "James L.",
    role: "Lifelong Learner",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=160&h=160&fit=crop&crop=faces",
    content:
      "The hands-on lessons and intuitive interface made learning engaging and seamless. I went from zero Figma experience to shipping live client projects in weeks. Can't recommend it enough!",
    rating: 5,
  },
  {
    id: "test-3",
    name: "Alex B.",
    role: "Inspired Creator",
    avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=160&h=160&fit=crop&crop=faces",
    content:
      "As a course creator, publishing and monetizing on ByteSpace was effortless. The platform provides tools, analytics, and an incredible community that truly appreciates good design work.",
    rating: 5,
  },
];
