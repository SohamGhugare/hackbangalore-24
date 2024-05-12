import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import soham from "../../../public/founders/soham.jpg";
import mosin from "../../../public/founders/mosin.jpg";
import arjun from "../../../public/founders/arjun.jpg";
import Image from "next/image";
import Timeline from "./Timeline";
const CompanyTabs = () => {
  const membersData = [
    {
      id: 0,
      name: "Soham Ghugare",
      position: "Founder",
      image: soham,
    },
    {
      id: 1,
      name: "Mosin Shaikh",
      position: "Founder",
      image: mosin,
    },
    {
      id: 2,
      name: "Arjun Bector",
      position: "Founder",
      image: arjun,
    },
  ];
  const MemberCard = ({ name, position, image }) => {
    return (
      <div className="h-56 w-48 shadow-lg flex flex-col items-center">
        <div className="h-40">
          <Image className="h-full w-auto" src={image} alt="" />
        </div>
        <h1>{name}</h1>
        <h1 className="text-sm text-slate-800">{position}</h1>
      </div>
    );
  };
  const members = membersData.map((member) => {
    return (
      <MemberCard
        key={member.id}
        name={member.name}
        position={member.position}
        image={member.image}
      />
    );
  });
  return (
    <div className="w-[80%] text-center m-auto">
      <Tabs defaultValue="account" className="w-full">
        <TabsList className="w-full gap-20">
          <TabsTrigger value="team">Team</TabsTrigger>
          <TabsTrigger value="updates">Updates</TabsTrigger>
          <TabsTrigger value="fundings">Fundings</TabsTrigger>
        </TabsList>
        <TabsContent value="team">
          <div className="flex justify-center w-full gap-20 py-10">
            {members}
          </div>
        </TabsContent>
        <TabsContent value="updates">
          <Timeline />
        </TabsContent>
        <TabsContent value="fundings">
          <div className="py-10">
            <h1 className="text-start ml-2 text-xl font-bold mt-4 mb-2">
              Datavant Funding
            </h1>
            <div className="flex bg-zinc-200 rounded-lg p-4 gap-20 items-center">
              <div className="flex flex-col items-start">
                <h1 className="font-semibold text-sm text-slate-600">
                  Valuation
                </h1>
                <h1>$10K</h1>
              </div>
              <div className="h-10 w-[1px] bg-slate-800 bg-opacity-50" />
              <div className="flex flex-col items-start">
                <h1 className="font-semibold text-sm text-slate-600">
                  Funded Over
                </h1>
                <h1>2 rounds</h1>
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default CompanyTabs;
