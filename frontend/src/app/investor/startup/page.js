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
        <div className="w-full">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/6stlCkUDG_s?si=5RgS1rPIN4QM3wK1"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
        <div className="w-full flex flex-col gap-4">
          <div>
            <h1 className="font-semibold text-base">Description</h1>
            <p className="text-slate-600 text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
              corrupti deleniti doloribus ab soluta illo a numquam voluptatem
              totam quia.
            </p>
          </div>
          <div>
            <h1>Website</h1>
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
            <h1 className="font-semibold text-base">Company Size</h1>
            <p className="text-slate-600 text-sm">10-15 Employees</p>
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
