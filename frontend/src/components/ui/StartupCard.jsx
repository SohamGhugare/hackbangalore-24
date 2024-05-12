import Image from "next/image";
import Link from "next/link";
import React from "react";

const StartupCard = ({ id, name, logo, industry, stage_of_development }) => {
  return (
    <Link
      href={"/investor/startup?id=" + id.toString()}
      className="h-44 w-44 shadow-xl rounded-lg border border-black border-opacity-15 p-6 flex flex-col justify-center cursor-pointer hover:scale-105 transition-all"
    >
      <div className="h-10 w-10">
        <img className="h-full w-auto" src={logo} />
      </div>
      <h1 className="mt-4">{name}</h1>
      <h1 className="text-xs text-slate-600">{industry}</h1>
      <h1 className="text-xs text-slate-600">{stage_of_development}</h1>
    </Link>
  );
};

export default StartupCard;
