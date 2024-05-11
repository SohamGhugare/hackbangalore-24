import HeroSection from "@/components/landing-page/HeroSection";
import Image from "next/image";
import circles from "../../public/landing-page/circles.png";
import Work from "@/components/landing-page/Work";
export default function Home() {
  return (
    <main className=" overflow-hidden bg-white">
      {/* <div className="h-[100vh] w-[100vh] bg-gradient-to-r from-transparent via-green-200 to-transparent rounded-full absolute -top-48 right-0 -z-10"/> */}
      {/* <Image src={circles} className="absolute z-[0] -top-80 repeat-0"/> */}
      <HeroSection />
      <Work/>
    </main>
  );
}
