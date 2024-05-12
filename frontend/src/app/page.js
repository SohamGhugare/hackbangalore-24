import HeroSection from "@/components/landing-page/HeroSection";
import Image from "next/image";
import circles from "../../public/landing-page/circles.png";
import Work from "@/components/landing-page/Work";
import Why from "@/components/landing-page/Why";
export default function Home() {
  return (
    <main className="bg-[#E5F7ED]">
      <HeroSection />
      {/* <Work />
      <Why/> */}
    </main>
  );
}
