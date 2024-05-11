import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="flex items-center justify-center min-h-screen px-32">
      <div className="w-full">
        <h1 className="text-3xl md:text-5xl font-bold">Welcome to</h1>
        <div className="relative">
          {/* <div className="absolute h-6 w-1/3 bg-[#69d18dca]" /> */}
          <h1 className="text-3xl md:text-5xl my-2 font-bold z-10">SustainX</h1>
        </div>
        <p>
          Unleash the potential of blockchain to drive positive change and fuel
          groundbreaking projects that shape a better tomorrow
        </p>
        <div className="flex justify-start gap-6 mt-4">
          <Link className="bg-primary-green w-40 p-2 rounded-md text-center font-semibold" href={"/"}>I am an Investor</Link>
          <Link className="bg-slate-300 w-40 p-2 rounded-md text-center font-semibold " href={"/"}>I run a Start Up</Link>
        </div>
      </div>
      <div className="w-full"></div>
    </section>
  );
};

export default HeroSection;
