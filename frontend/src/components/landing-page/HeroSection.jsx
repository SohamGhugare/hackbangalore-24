import Link from "next/link";
import Button from "../ui/Button";

const HeroSection = () => {
  return (
    <section className="flex flex-col items-center min-h-screen z-10">
      <h1 className="text-6xl font-bold  mt-20 mb-5">Help us Make</h1>
      <h1 className="text-6xl font-bold my-5 ">
        <span className="bg-gradient-to-r from-[#FFF500] bg-clip-text text-transparent to-[#36C16D] text-shadow">
          World
        </span>{" "}
        <span className="bg-gradient-to-l from-[#04C359] bg-clip-text text-transparent to-[#36C16D]">a Better Place</span>
      </h1>
      <p className="font">
        We work for the betterment of society akjhdjas dahjsdha hruhwbd .
        asdhgadgey dakhbshjd
      </p>
      <div className="my-10 flex gap-10">
        <Link className="bg-primary-green py-2 px-6 rounded-lg text-white" href={"/"}>Explore</Link>
        <Link className="bg-white py-2 px-6 rounded-lg text-black" href={"/"}>Become a member</Link>
      </div>
    </section>
  );
};

export default HeroSection;
