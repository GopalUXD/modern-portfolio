"use client";

import React from "react";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs,
} from "react-icons/fa";

import { SiTailwindcss, SiNextdotjs } from "react-icons/si";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";
import { TooltipProvider } from "@radix-ui/react-tooltip";

const about = {
  title: "About me",
  description:
    "Software engineer with 3 years of experience in React, JavaScript, Next.js, Node.js, and MySQL. Graduate of East West University, currently working at a Japanese software company in Bangladesh, passionate about web development and Japanese culture.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Gopal Kumar Saha",
    },
    {
      fieldName: "Phone",
      fieldValue: "(+880) 1746335574",
    },
    {
      fieldName: "Experience",
      fieldValue: "4+ Years",
    },
    // {
    //   fieldName: "LinkedIn",
    //   fieldValue: "https://www.linkedin.com/in/gopal-kumar-saha-094a471b5/",
    // },
    {
      fieldName: "Nationality",
      fieldValue: "Bangladeshi",
    },
    {
      fieldName: "Email",
      fieldValue: "gopal.saha.cse@gmail.com",
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available",
    },
    {
      fieldName: "Language",
      fieldValue: "Bangla, English, Japanese",
    },
  ],
};

const experience = {
  icon: "/assets/resume/badge.svg",
  title: "My experience",
  description:
    "Software engineer with over 3 years of experience in web development, working on front-end and back-end technologies across international and local projects.",
  items: [
    {
      company: "Ultra-X BD LTD.",
      position: "Software Engineer",
      duration: "Sept,2021 - Present",
    },
    {
      company: "Skillhutch",
      position: "Web Developer",
      duration: "Jan,2021 - Aug,2021",
    },
  ],
};

const education = {
  icon: "/assets/resume/cap.svg",
  title: "My education",
  description:
    "Completed formal education in Computer Science and Engineering at East West University, with additional training in Web Design and Development. Holds HSC and SSC qualifications from Lalpur colleges",
  items: [
    {
      institution: "Creative IT Institution",
      degree: "Web Design and Development",
      duration: "Jan,2020 - Dec,2020",
    },
    {
      institution: "East West University",
      degree: "Bachelor of Computer Science and Engineering(CSE)",
      duration: "2014-2018",
    },
    {
      institution: "Lalpur College",
      degree: "Higher School Certificate(HSC)",
      duration: "2013",
    },
    {
      institution: "Lalpur Degree College",
      degree: "Secondary School Certificate(SSC)",
      duration: "2011",
    },
  ],
};

const skills = {
  title: "My Skills",
  description:
    "Proficient in front-end and back-end web development, including React, Next.js, Node.js, JavaScript, HTML5, CSS, Tailwind CSS, and design tools like Figma.",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "HTML-5",
    },
    {
      icon: <FaCss3 />,
      name: "CSS",
    },
    {
      icon: <FaJs />,
      name: "JavaScript",
    },
    {
      icon: <FaReact />,
      name: "React",
    },
    {
      icon: <FaFigma />,
      name: "Figma",
    },
    {
      icon: <FaNodeJs />,
      name: "Node JS",
    },
    {
      icon: <SiTailwindcss />,
      name: "Tailwind css",
    },
    {
      icon: <SiNextdotjs />,
      name: "Next JS",
    },
  ],
};

const ResumePage = () => {
  return (
    <motion.div
      className="sm:mx-16 mx-8 py-4"
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
    >
      <Tabs
        defaultValue="experience"
        className="flex flex-col xl:flex-row gap-[60px]"
      >
        <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
          <TabsTrigger value="experience">Experience</TabsTrigger>
          <TabsTrigger value="education">Education</TabsTrigger>
          <TabsTrigger value="skills">Skills</TabsTrigger>
          <TabsTrigger value="about">About Me</TabsTrigger>
        </TabsList>
        <div className="min-h-[70vh] w-full">
          <TabsContent value="experience" className="w-full">
            <div className="flex flex-col gap-[30px] text-center xl:text-left">
              <h3 className="text-4xl font-bold">{experience.title}</h3>
              <p className=" text-white/60 xl:mx-0 w-full">
                {experience.description}
              </p>

              <ScrollArea className="h-[400px]">
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-[30px]">
                  {experience.items.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="bg-[#232329] h-[184px] py-4 px-8 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                      >
                        <span className="whitespace-nowrap text-customAccent">
                          {item.duration}
                        </span>
                        <h3 className="text-xl max-w-[260px] text-center lg:text-left">
                          {item.position}
                        </h3>
                        <div className="flex items-center gap-3">
                          <span className="w-[6px] h-[6px] rounded-full bg-customAccent"></span>
                          <p className="text-white/60">{item.company}</p>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </ScrollArea>
            </div>
          </TabsContent>

          <TabsContent value="education" className="w-full">
            <div className="flex flex-col gap-[30px] text-center xl:text-left">
              <h3 className="text-4xl font-bold">{education.title}</h3>
              <p className=" text-white/60 xl:mx-0 w-full">
                {education.description}
              </p>

              <ScrollArea className="h-[400px]">
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-[30px]">
                  {education.items.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                      >
                        <span className="text-customAccent">{item.degree}</span>
                        <h3 className="text-xl w-full text-center lg:text-left">
                          {item.institution}
                        </h3>
                        <div className="flex items-center gap-3">
                          <span className="w-[6px] h-[6px] rounded-full bg-customAccent"></span>
                          <p className="text-white/60">{item.duration}</p>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </ScrollArea>
            </div>
          </TabsContent>

          <TabsContent value="skills" className="w-full h-full">
            <div className="flex flex-col gap-[30px]">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{skills.title}</h3>
                <p className="mx-w-[600px] text-white/80 mx-auto xl:mx-0">
                  {skills.description}
                </p>
              </div>
              <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:gap-[30px] gap-4">
                {skills.skillList.map((skill, index) => {
                  return (
                    <li key={index}>
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger className="w-full h-[120px] bg-[#232329] rounded-xl flex justify-center items-center group">
                            <div className="text-6xl hover:text-customAccent transition-all duration-300">
                              {skill.icon}
                            </div>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="capitalize">{skill.name}</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </li>
                  );
                })}
              </ul>
            </div>
          </TabsContent>

          <TabsContent
            value="about"
            className="w-full text-center xl:text-left"
          >
            <div className="flex flex-col gap-[30px]">
              <h3 className="text-4xl font-bold">{about.title}</h3>
              <h3 className="text-white/60 mx-auto xl:mx-0">
                {about.description}
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-6">
                {about.info.map((item, index) => {
                  return (
                    <li
                      key={index}
                      className="flex items-center justify-center sm:justify-start gap-4"
                    >
                      <span className="text-white/60">{item.fieldName} : </span>
                      <span className="text-lg">{item.fieldValue}</span>
                    </li>
                  );
                })}
              </ul>
            </div>
          </TabsContent>
        </div>
      </Tabs>
    </motion.div>
  );
};

export default ResumePage;
