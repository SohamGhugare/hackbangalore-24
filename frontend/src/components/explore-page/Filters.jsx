"use client";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Label from "../ui/Label";
import { useState } from "react";
import StartupCard from "../ui/StartupCard";
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

const Filters = ({ setLoading, startups, setStartups }) => {
  const [data, setData] = useState({
    socialImpact: "",
    environmentImpact: "",
    riskTolerance: "",
    investmentDuration: "",
  });
  const getData = async () => {
    const arr = [
      data.socialImpact,
      data.environmentImpact,
      data.riskTolerance,
      data.investmentDuration,
    ];
    const query = arr.filter((e) => e !== "").join(",");
    setLoading(true);
    fetch(`http://127.0.0.1:8080/api/v1/startups?filter=${query}`)
      .then((res) => {
        if (res.status === 200) {
          setLoading(false);
        }
        return res.json();
      })
      .then((data) => {
        const cards = data?.startups.map((startup) => (
          <StartupCard
            key={startup._id}
            id={startup._id}
            name={startup.name}
            logo={getRandomImage()}
            industry={startup.industry}
            stage_of_development={startup.stage_of_development}
          />
        ));
        console.log("\n\n\n\n\n\n\n\n\n\n");
        console.log(data.startups);
        setStartups(cards);
      });
  };
  return (
    <section>
      <div className="flex flex-wrap justify-center gap-10 my-10">
        <div>
          <Select
            onValueChange={(e) => {
              setData({ ...data, socialImpact: e });
            }}
          >
            <Label label="Social Imapact" />
            <SelectTrigger className="w-[220px]">
              <SelectValue placeholder="Social Impact" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Education">Education</SelectItem>
              <SelectItem value="Healthcare">Healthcare</SelectItem>
              <SelectItem value="Poverty Alleviation">
                Poverty Alleviation
              </SelectItem>
              <SelectItem value="Gender Equality">Gender Equality</SelectItem>
              <SelectItem value="Social Justice and Equality">
                Social Justice and Equality
              </SelectItem>
              <SelectItem value="Community Development">
                Community Development
              </SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <Select
            onValueChange={(e) => {
              setData({ ...data, environmentImpact: e });
            }}
          >
            <Label label="Environment Imapact" />
            <SelectTrigger className="w-[220px]">
              <SelectValue placeholder="Environment Impact" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Renewable Energy">Renewable Energy</SelectItem>
              <SelectItem value="Sustainable Agriculture">
                Sustainable Agriculture
              </SelectItem>
              <SelectItem value="Clean Technology">Clean Technology</SelectItem>
              <SelectItem value="Biodiversity Conservation">
                Biodiversity Conservation
              </SelectItem>
              <SelectItem value="Climate Change Mitigation and Adaptation">
                Climate Change Mitigation and Adaptation
              </SelectItem>
              <SelectItem value="Water and Sanitation">
                Water and Sanitation
              </SelectItem>
              <SelectItem value="Circular Economy">Circular Economy</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <Select
            onValueChange={(e) => {
              setData({ ...data, riskTolerance: e });
            }}
          >
            <Label label="Risk Tolerance" />
            <SelectTrigger className="w-[220px]">
              <SelectValue placeholder="Risk Tolerance" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1">Low</SelectItem>
              <SelectItem value="2">Medium</SelectItem>
              <SelectItem value="3">High</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <Select
            onValueChange={(e) => {
              setData({ ...data, investmentDuration: e });
            }}
          >
            <Label label="Investment Duration" />
            <SelectTrigger className="w-[220px]">
              <SelectValue placeholder="Investment Duration" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1">Low</SelectItem>
              <SelectItem value="2">Medium</SelectItem>
              <SelectItem value="3">High</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="flex justify-center">
        <button
          onClick={() => {
            getData();
          }}
          className="bg-[#4fc87d] py-2 px-4 rounded-lg my-10"
        >
          Apply Filters
        </button>
      </div>
    </section>
  );
};

export default Filters;
