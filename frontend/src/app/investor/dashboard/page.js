import Button from "@/components/ui/Button";
import StartupCard from "@/components/ui/StartupCard";
import Link from "next/link";

const page = () => {
  const startups = [
    {
      id: 0,
      name: "startup1",
      logo: "https://cdn.angellist.com/startups/i/975823-9438464e7e345f2c7352b94b9a8dc3cf-thumb_jpg.jpg?buster=1589580689",
      industry: "animals",
      stage_of_development: "pre funding",
    },
    {
      id: 1,
      name: "startup1",
      logo: "https://cdn.angellist.com/startups/i/975823-9438464e7e345f2c7352b94b9a8dc3cf-thumb_jpg.jpg?buster=1589580689",
      industry: "animals",
      stage_of_development: "pre funding",
    },
    {
      id: 2,
      name: "startup1",
      logo: "https://cdn.angellist.com/startups/i/975823-9438464e7e345f2c7352b94b9a8dc3cf-thumb_jpg.jpg?buster=1589580689",
      industry: "animals",
      stage_of_development: "pre funding",
    },
  ];
  return (
    <main className="flex flex-col max-w-xl m-auto pt-20">
      <h1 className="text-center text-3xl md:text-4xl font-bold">
        Based on your Profile
      </h1>
      <h1 className="text-center text-2xl md:text-3xl mt-4">
        These are the Best Startups for you
      </h1>
      <div className="flex flex-wrap justify-around w-full mt-6 gap-4">
        {startups.map((startup) => (
          <StartupCard
            key={startup.id}
            id={startup.id}
            name={startup.name}
            logo={startup.logo}
            industry={startup.industry}
            stage_of_development={startup.stage_of_development}
          />
        ))}
      </div>
      <div className="flex w-full justify-center my-10">
        <Link
          className="bg-black text-white p-2 rounded-xl hover:opacity-80 transition-all"
          href="/investor/explore"
        >
          Search More
        </Link>
      </div>
    </main>
  );
};

export default page;
