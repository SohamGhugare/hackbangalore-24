"use client";
import Filters from "@/components/explore-page/Filters";
import Loader from "@/components/ui/Loader";
import StartupCard from "@/components/ui/StartupCard";
import { useEffect, useState } from "react";

function getRandomImage() {
  return images[Math.floor(Math.random() * 5)];
}

const images = [
  "https://cdn.angellist.com/startups/i/434782-c98e482a57fb3174015721fa6cb999f5-thumb_jpg.jpg?buster=1466584506",
  "https://cdn.angellist.com/startups/i/787705-963e2659f2be78b2b2224364fe391761-thumb_jpg.jpg?buster=1644449912",
  "https://cdn.angellist.com/startups/i/453027-f62871b5f6f5a5d67fe4b3005603c7d9-thumb_jpg.jpg?buster=1698993291",
  "https://cdn.angellist.com/startups/i/677316-fa0984dace218f67a578f18c1d950dd7-thumb_jpg.jpg?buster=1583869992",
  "https://cdn.angellist.com/startups/i/4055695-c45adb3dfae48acf65ed20c325e4d167-thumb_jpg.jpg?buster=1536344232",
];

const Page = () => {
  const [startups, setStartups] = useState(null);
  const [loading, setLoading] = useState(false);
  const getData = async () => {
    setLoading(true);
    fetch("http://127.0.0.1:8080/api/v1/startups")
      .then((response) => {
        if (response.status === 200) {
          setLoading(false);
        }
        return response.json();
      })
      .then((data) => {
        const cards = data?.startups.map((startup) => (
          <StartupCard
            key={startup._id}
            id={startup.id}
            name={startup.name}
            logo={getRandomImage()}
            industry={startup.industry}
            stage_of_development={startup.stage_of_development}
          />
        ));
        setStartups(cards);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <main className="min-h-screen pt-20">
      {loading && <Loader />}
      <h1 className="text-6xl font-bold text-center">Find Startups</h1>
      <Filters
        setLoading={setLoading}
        startups={startups}
        setStartups={setStartups}
      />
      {startups && (
        <div className="flex flex-wrap justify-center gap-10">{startups}</div>
      )}
    </main>
  );
};

export default Page;
