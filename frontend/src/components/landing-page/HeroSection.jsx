"use client";
import Image from "next/image";
import Link from "next/link";
import hero from "../../../public/landing-page/hero.png";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="relative flex items-center justify-center min-h-screen px-32 overflow-hidden">
      <motion.div
        initial={{
          top: "-65rem",
          right: "-70rem",
        }}
        animate={{
          top: "-70rem",
          right: "-50rem",
        }}
        transition={{ repeat: Infinity, duration: 5, repeatType: "reverse" }}
        className="flex absolute z-[0] h-[200vh] w-[200vh] bg-green-500 rounded-full top-[-85rem] right-[-90rem] blur-2xl opacity-35"
      />
      <motion.div
        initial={{
          bottom: "-65rem",
          left: "-70rem",
        }}
        animate={{
          bottom: "-70rem",
          left: "-50rem",
        }}
        transition={{
          repeat: Infinity,
          duration: 5,
          repeatType: "reverse",
          delay: "2.5",
        }}
        className="flex absolute z-[0] h-[200vh] w-[200vh] bg-green-500 rounded-full bottom-[-85rem] left-[-90rem] blur-2xl opacity-35"
      />

      <div className="w-full z-[100]">
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
          <div className="relative ml-4 my-6 h-6 w-1/3 bg-transparent ">
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
          We connect impact investors with high-potential social impact startups
          using advanced AI-driven matchmaking algorithms, blockchain-powered
          tracking systems, and a dynamic platform to streamline the entire
          journey!
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
          transition={{ type: "spring", stiffness: 100, delay: 0.6 }}
          className="flex justify-start gap-6 mt-4"
        >
          <Link
            className="bg-primary-green w-40 p-2 rounded-md text-center font-semibold border border-black border-opacity-35"
            href={"/investor/signup"}
          >
            I am an Investor
          </Link>
          <Link
            className="bg-slate-300 w-40 p-2 rounded-md text-center font-semibold border border-black border-opacity-35 "
            href={"/startup/signup"}
          >
            I run a Start Up
          </Link>
        </motion.div>
      </div>
      <div className="w-full z-[100]">
        <Image className="h-full w-auto" src={hero} alt="hero" />
      </div>
    </section>
  );
};

export default HeroSection;
