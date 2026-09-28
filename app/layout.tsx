import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "ByteSpace — Empowering Knowledge & Digital Creation",
  description:
    "Unlock your creativity, gain valuable knowledge, and grow your career with ByteSpace courses and digital assets.",
  keywords: ["online courses", "digital assets", "UI/UX", "Figma", "learning platform"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${poppins.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans bg-white text-shuttle-950 selection:bg-lime-400 selection:text-shuttle-950">
        {children}
      </body>
    </html>
  );
}
