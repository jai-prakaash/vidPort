import { Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { useEffect } from "react";
import { FiArrowRight } from "react-icons/fi";
import {
  useMotionTemplate,
  useMotionValue,
  motion,
  animate,
} from "framer-motion";

import WorksVid from "./Workvid";
import Hero from "./Hero";
import WorksImg from "./WorksImg";
import ContactUs from "./Contact";



const COLORS_TOP = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"];

export const AuroraHero1 = () => {
  const color = useMotionValue(COLORS_TOP[0]);

  useEffect(() => {
    animate(color, COLORS_TOP, {
      ease: "easeInOut",
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, []);

  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #020617 50%, ${color})`;
  const border = useMotionTemplate`1px solid ${color}`;
  const boxShadow = useMotionTemplate`0px 4px 24px ${color}`;

  return (
    <div className="relative">
      <motion.section
        style={{
          backgroundImage,
        }}
        className="relative min-h-screen bg-gray-950 text-gray-200"
      >

        <nav className="bg-inherit flex justify-between p-1 relative z-10">

          <div className="ml-[1%] flex w-[70px] h-[70px] rounded-full  text-xl text-white justify-center items-center neon-shadow ">
            SamVfx
          </div>



          <div className="flex w-[30%] mr-[1%] items-center  justify-around justify-center">
            <button className=" bg-slate-500 text-slate-700 hover:neon-shadow h-[50%] w-[20%] rounded-full  ">Portfolio</button>
            <button className=" bg-slate-500 text-slate-700 hover:neon-shadow h-[50%] w-[20%] rounded-full ">About</button>
            <button className="  bg-slate-500 text-slate-700 hover:neon-shadow h-[50%] w-[20%] rounded-full ">Contact</button>
          </div>
        </nav>

        <Hero />


        <WorksVid />

        <WorksImg />

        <ContactUs />





      </motion.section>
      <div className="absolute inset-0 z-0">
        <Canvas>
          <Stars radius={50} count={2500} factor={4} fade speed={2} />
        </Canvas>
      </div>
    </div>
  );
};