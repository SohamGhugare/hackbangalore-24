"use client";
import Image from "next/image";
import Link from "next/link";
import hero from "../../../public/landing-page/hero.png";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="flex items-center justify-center min-h-screen px-32">
      <div className="w-full">
        <motion.h1
          initial={{
            opacity: 0,
            y: 10,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{ type: "spring", stiffness: 100 }}
          className="text-3xl md:text-5xl font-bold"
        >
          Welcome to
        </motion.h1>
        <motion.div
          initial={{
            opacity: 0,
            y: 10,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
          className="text-3xl md:text-5xl font-bold"
        >
          <div className="relative ml-4 my-6 h-6 w-1/3 bg-[#69d18dca] ">
            <h1 className="absolute -top-5 -left-4 text-3xl pt-[-36] md:text-5xl my-2 font-bold z-[9999]">
              SustainX
            </h1>
          </div>
        </motion.div>
        <motion.p
          initial={{
            opacity: 0,
            y: 10,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{ type: "spring", stiffness: 100, delay: 0.4 }}
        >
          Unleash the potential of blockchain to drive positive change and fuel
          groundbreaking projects that shape a better tomorrow
        </motion.p>
        <motion.div 
        initial={{
          opacity: 0,
          y: 10,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{ type: "spring", stiffness: 100, delay: 0.6}}
         className="flex justify-start gap-6 mt-4">
          <Link
            className="bg-primary-green w-40 p-2 rounded-md text-center font-semibold"
            href={"/investor/signup"}
          >
            I am an Investor
          </Link>
          <Link
            className="bg-slate-300 w-40 p-2 rounded-md text-center font-semibold "
            href={"/startup/signup"}
          >
            I run a Start Up
          </Link>
        </motion.div>
      </div>
      <div className="w-full">
        <Image className="h-full w-auto" src={hero} alt="hero" />
      </div>
    </section>
  );
};

export default HeroSection;
