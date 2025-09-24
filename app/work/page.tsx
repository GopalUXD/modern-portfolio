"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";
import { TooltipProvider } from "@radix-ui/react-tooltip";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import WorkSliderButton from "@/components/WorkSliderButton";

const projects = [
  {
    num: "01",
    category: "Full-Stack",
    title: "Company Management ERP System",
    description:
      "Spearheaded the development of a Next.js and Node.js-based ERP system for a Japanese client, enabling seamless management of attendance, employees, inventory, HR, and financial data.",
    stack: [
      { name: "Next JS" },
      { name: "Node JS" },
      { name: "MySQL" },
      { name: "MongoDB" },
    ],
    image: "/assets/work/thumb1.png",
    live: "",
    github: "",
  },

  {
    num: "02",
    category: "Web App",
    title: "Visitor Registration Tool (VRT)",
    description:
      "Developed a visitor registration tool for managing attendance of visitors and organizers using Next.js, Node.js, and MySQL database.",
    stack: [{ name: "Next JS" }, { name: "Node JS" }, { name: "MySQL" }],
    image: "/assets/work/thumb2.png",
    live: "",
    github: "",
  },

  {
    num: "03",
    category: "Event Management",
    title: "Event Management System",
    description:
      "Built an event management platform where organizers can create events and visitors can attend by scanning projects from participating companies.",
    stack: [{ name: "Next JS" }, { name: "Node JS" }, { name: "MySQL" }],
    image: "/assets/work/thumb3.png",
    live: "",
    github: "",
  },

  {
    num: "04",
    category: "E-commerce",
    title: "PC Information Collection Tool (PCICT)",
    description:
      "Developed a platform for managing and selling used or old PCs using Next.js, Node.js, and MySQL database.",
    stack: [{ name: "Next JS" }, { name: "Node JS" }, { name: "MySQL" }],
    image: "/assets/work/thumb1.png",
    live: "",
    github: "",
  },

  {
    num: "05",
    category: "Retail Management",
    title: "Optical Showroom Management System",
    description:
      "Designed and implemented a showroom website for optical products to manage sales statements and securely store customer information.",
    stack: [{ name: "Next JS" }, { name: "Node JS" }, { name: "MySQL" }],
    image: "/assets/work/thumb2.png",
    live: "",
    github: "",
  },
];

const WorkPage = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper: any) => {
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex]);
  };

  return (
    <motion.div
      className="sm:mx-16 mx-8 py-4"
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
    >
      <div className="flex flex-col xl:flex-row xl:gap-[30px]">
        <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
          <div className="flex flex-col gap-[30px]">
            <h1 className="text-8xl leading-none font-extrabold text-transparent text-outline">
              {" "}
              {project.num}
            </h1>
            <h2 className="text-[42px] font-bold leading-none text-white hover:text-customAccent transition-all duration-300 capitalize">
              {" "}
              {project.category} Project
            </h2>
            <p className="text-white/80">{project.description} </p>

            <ul className="flex gap-4">
              {project.stack.map((moveItem, index) => {
                return (
                  <li key={index} className="text-xl text-customAccent">
                    {moveItem.name}
                    {index !== project.stack.length - 1 && ","}
                  </li>
                );
              })}
            </ul>

            <div className="border border-white/20"></div>

            <div className="flex items-center gap-4">
              <Link href={project.live} target="_blank">
                <TooltipProvider delayDuration={100}>
                  <Tooltip>
                    <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center">
                      <BsArrowUpRight className="text-white text-3xl hover:text-customAccent transition-all duration-300" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Live Project</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </Link>

              <Link href={project.github} target="_blank">
                <TooltipProvider delayDuration={100}>
                  <Tooltip>
                    <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center">
                      <BsGithub className="text-white text-3xl hover:text-customAccent transition-all duration-300" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Live Project</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </Link>
            </div>
          </div>
        </div>
        <div className="w-full xl:w-[50%]">
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            className="xl:h-[520px] mb-12"
            onSlideChange={handleSlideChange}
          >
            {" "}
            {projects.map((project, index) => {
              return (
                <SwiperSlide key={index} className="w-full">
                  <div className="absolute top-0 bottom-0 w-full h-full bg-black-10 z-10"></div>

                  <div className="relative w-full h-full">
                    <img
                      src={project.image}
                      className="object-cover w-full h-full xl:w-fit xl:h-fit"
                      alt="Project Image"
                    />
                  </div>
                </SwiperSlide>
              );
            })}
            <WorkSliderButton
              containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
              btnStyles="bg-customAccent hover:bg-customAccentHover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
            />
          </Swiper>
        </div>
      </div>
    </motion.div>
  );
};

export default WorkPage;
