"use client";
import FormInput from "@/components/ui/FormInput";
import Label from "@/components/ui/Label";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";

import { useState } from "react";

const Page = () => {
  const [activities, setActivities] = useState([
    {
      id: 0,
      title: "Activity 1",
      description: "Sustainable Agricultural Workshop",
      content:
        "In the heart of rural communities, we fostered a spirit of sustainability and organic farming through an engaging workshop. Participants delved into innovative techniques and practices aimed at nurturing the land while preserving its natural integrity. Together, we explored the symbiotic relationship between agriculture and the environment, empowering local farmers to cultivate bountiful yields in harmony with nature's rhythm. Through shared knowledge and hands-on activities, we sowed the seeds of a greener, more resilient future for our agricultural landscapes.",
      date: "2021-10-10",
    },
  ]);
  const [temp, setTemp] = useState({
    id: null,
    title: "Activity " + (activities.length + 1),
    description: "",
    content: "",
    date: "",
  });
  const items = activities.map((activity) => (
    <AccordionItem
      value={`item-${activity.id}`}
      className="border border-black px-4 rounded-xl my-4"
      key={activity.id}
    >
      <AccordionTrigger>
        <div className="flex flex-col items-start">
          <h1 className="font-semibold text-zinc-700">{activity.title}</h1>
          <h1 className="font-semibold text-xl">{activity.description}</h1>
        </div>
      </AccordionTrigger>
      <AccordionContent>
        <p>{activity.content}</p>
        <p className="font-semibold pt-5">{activity.date}</p>
      </AccordionContent>
    </AccordionItem>
  ));
  return (
    <main className="min-h-screen pt-20 px-20">
      <h1 className="text-6xl text-center uppercase tracking-wider mb-10">
        AgriSim
      </h1>
      <div>
        <h1 className="font-semibold">Description</h1>
        <p>
          At AgriSim, we&apos;re redefining the future of agriculture through
          cutting-edge technology and a deep commitment to the farming
          community. Our platform is more than just an app; it&apos;s a
          comprehensive solution that empowers farmers to make data-driven
          decisions and achieve higher yields and sustainability.
        </p>
        <h1 className="font-semibold mt-10">Activities</h1>
        <Accordion type="single" collapsible>
          {items}
        </Accordion>
        <Dialog>
          <div className="flex justify-end w-full">
            <DialogTrigger>
              <button className="bg-primary-green text-black shadow-md py-2 my-10 px-10 rounded-lg">
                Add Activity
              </button>
            </DialogTrigger>
          </div>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>New Activity</DialogTitle>
              <DialogDescription>
                <div className="pl-0">
                  <Label label="Title" />
                  <input
                    className="border border-black p-1 rounded-lg w-full"
                    type="text"
                    value={temp.description}
                    onChange={(e) => {
                      setTemp({ ...temp, description: e.target.value });
                    }}
                  />
                  <Label label="Description" />
                  <textarea
                    rows={10}
                    className="border-2 border-black rounded-xl p-2 w-full"
                    value={temp.content}
                    type="text"
                    onChange={(e) => {
                      setTemp({ ...temp, content: e.target.value });
                    }}
                  />
                  <Label label="Date" />
                  <input
                    rows={10}
                    className="border-2 border-black rounded-xl p-2 w-full"
                    value={temp.date}
                    type="date"
                    onChange={(e) => {
                      setTemp({ ...temp, date: e.target.value });
                    }}
                  />
                  <div className="flex justify-end w-full">
                    <DialogClose asChild>
                      <button
                        className="bg-green-700 text-white mt-4 py-2 px-6 rounded-lg"
                        onClick={() => {
                          setActivities([
                            ...activities,
                            { ...temp, id: activities.length },
                          ]);
                        }}
                      >
                        Add
                      </button>
                    </DialogClose>
                  </div>
                </div>
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </div>
    </main>
  );
};

export default Page;
