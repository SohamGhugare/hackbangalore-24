import Image from "next/image";
import Link from "next/link";
import React from "react";

const StartupCard = ({ id, name, logo, industry, stage_of_development }) => {
  return (
    <Link
      href={"/investor/startup?id=" + id}
      className="h-56 w-56 shadow-xl rounded-lg border border-black border-opacity-15 p-6 flex flex-col justify-center cursor-pointer hover:scale-105 transition-all"
    >
      <div className="h-10 w-10">
        <img className="h-full w-auto" src={logo} />
      </div>
      <h1 className="mt-4 text-wrap">{name}</h1>
      <h1 className="text-xs text-slate-600 text-wrap">{industry}</h1>
      <h1 className="text-xs text-slate-600 text-wrap">
        {stage_of_development}
      </h1>
    </Link>
  );
};

export default StartupCard;
