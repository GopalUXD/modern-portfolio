"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const projects = [
  {
    num: "01",
    category: "Frontend",
    title: "Project 1",
    description: "",
    stack: [
      { name: "Next JS" },
      { name: "Tailwind CSS" },
      { name: "Shad CN" },
      { name: "Node JS" },
      { name: "MySQL" },
    ],
  },
];

const WorkPage = () => {
  return <div className="sm:mx-16 mx-8">WorkPage</div>;
};

export default WorkPage;
