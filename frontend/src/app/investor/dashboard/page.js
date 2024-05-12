"use client";
import StartupCard from "@/components/ui/StartupCard";
import Link from "next/link";
import { useEffect, useState } from "react";

function getRandomImage() {
  return images[Math.floor(Math.random() * 5)];
}
function getRandomNumber() {
  return Math.floor(Math.random() * 50);
}
const images = [
  "https://cdn.angellist.com/startups/i/434782-c98e482a57fb3174015721fa6cb999f5-thumb_jpg.jpg?buster=1466584506",
  "https://cdn.angellist.com/startups/i/787705-963e2659f2be78b2b2224364fe391761-thumb_jpg.jpg?buster=1644449912",
  "https://cdn.angellist.com/startups/i/453027-f62871b5f6f5a5d67fe4b3005603c7d9-thumb_jpg.jpg?buster=1698993291",
  "https://cdn.angellist.com/startups/i/677316-fa0984dace218f67a578f18c1d950dd7-thumb_jpg.jpg?buster=1583869992",
  "https://cdn.angellist.com/startups/i/4055695-c45adb3dfae48acf65ed20c325e4d167-thumb_jpg.jpg?buster=1536344232",
];

const page = () => {
  const [startupsData, setStartupsData] = useState(null);
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
  useEffect(() => {
    fetch("http://127.0.0.1:8080/api/v1/startups")
      .then((res) => res.json())
      .then((data) => {
        setStartupsData(data.startups);
      });
  }, []);
  return (
    <main className="flex flex-col max-w-xl m-auto pt-20 min-h-screen">
      <h1 className="text-center text-3xl md:text-4xl font-bold">
        Based on your Profile
      </h1>
      <h1 className="text-center text-2xl md:text-3xl mt-4">
        These are the Best Startups for you
      </h1>
      {startupsData && (
        <div className="flex flex-wrap justify-around w-full mt-6 gap-4">
          {Array(3)
            .fill(0)
            .map((_, idx) => {
              const random = getRandomNumber();
              return (
                <StartupCard
                  key={random}
                  id={startupsData[random].id}
                  name={startupsData[random].name}
                  logo={startupsData[random].logo}
                  industry={startupsData[random].industry}
                  stage_of_development={
                    startupsData[random].stage_of_development
                  }
                />
              );
            })}
        </div>
      )}
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
