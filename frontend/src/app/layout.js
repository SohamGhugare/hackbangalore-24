import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "SustainX",
  description: "Intersection of Investors and Startups.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <div className="bg-[#E5F7ED] font-Freeman">{children}</div>
      </body>
    </html>
  );
}
