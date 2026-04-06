import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "./portfolio.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Gokulraj | Web Developer",
  description: "Portfolio of Gokulraj, a passionate Web Developer skilled in HTML, CSS, JavaScript, and Python.",
  keywords: ["Gokulraj", "Web Developer", "Frontend Developer", "Python", "JavaScript", "React"],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
