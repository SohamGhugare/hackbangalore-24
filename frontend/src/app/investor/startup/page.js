"use client";

import CompanyTabs from "@/components/startup-info/CompanyTabs";
import Link from "next/link";
import { FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
const Page = () => {
  return (
    <main className="pt-20 px-20 w-full m-auto min-h-screen">
      <h1 className="text-center text-6xl uppercase font-bold">
        Startup Details
      </h1>
      <div className="flex w-full mt-10 gap-6">
        <div className="w-full flex items-center">
          <video src="/pitch.mp4" autoPlay muted controls />
        </div>
        <div className="w-full flex flex-col gap-4">
          <div>
            <h1 className="font-semibold text-xl">Startup Name</h1>
            <p className="text-slate-600 text-base">SustainX</p>
          </div>
          <div>
            <h1 className="font-semibold text-xl">Description</h1>
            <p className="text-slate-600 text-base">
              SustainX connects impact investors with high-potential social
              impact startups using advanced AI-driven matchmaking algorithms,
              blockchain-powered tracking systems, and a dynamic platform to
              streamline the entire journey. This enables capital to flow more
              efficiently toward projects working on pressing challenges such as
              sustainability, inclusion, and beyond - ultimately amplifying
              positive social & environmental impact globally.
            </p>
          </div>
          <div>
            <h1 className="font-semibold text-xl">Website</h1>
            <Link className="text-blue-500 underline" href={"/"}>
              www.sustainx.com
            </Link>
            <div className="flex gap-2 text-slate-600">
              <Link href={"https://www.linkedin.in"} className="cursor-pointer">
                <FaLinkedin />
              </Link>
              <Link
                href={"https://www.instagram.com"}
                className="cursor-pointer"
              >
                <FaInstagram />
              </Link>
              <Link href={"https://www.twitter.com"} className="cursor-pointer">
                <FaTwitter />
              </Link>
            </div>
          </div>
          <div>
            <h1 className="font-semibold text-xl">Company Size</h1>
            <p className="text-slate-600 text-base">10-15 Employees</p>
          </div>
        </div>
      </div>
      <h1 className="text-6xl my-10 text-center font-bold uppercase">
        Company Highlights
      </h1>

      <CompanyTabs />
    </main>
  );
};

export default Page;
