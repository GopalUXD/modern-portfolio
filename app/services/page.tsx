"use client";

import React from "react";
import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";
import { motion } from "framer-motion";

const services = [
  {
    num: "01",
    title: "Frontend Development",
    description:
      "Building dynamic and responsive user interfaces using React and Next.js for seamless user experiences.",
    href: "/services",
  },
  {
    num: "02",
    title: "Backend Development",
    description:
      "Developing scalable and secure server-side applications with Node.js, ensuring high performance and reliability.",
    href: "/services",
  },
  {
    num: "03",
    title: "Database Management",
    description:
      "Designing and managing relational (MySQL) and non-relational (MongoDB) databases for optimized data storage and retrieval.",
    href: "/services",
  },
  {
    num: "04",
    title: "Full-Stack Solutions",
    description:
      "Delivering complete web solutions by integrating React, Next.js, Node.js, MySQL, and MongoDB for end-to-end development.",
    href: "/services",
  },
];

const ServicePage = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-8">
      <div className="sm:mx-20 mx-12">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((service, index) => {
            return (
              <div
                key={index}
                className="flex-1 flex flex-col justify-center gap-6 group"
              >
                <div className="w-full flex justify-between items-center">
                  <div className="sm:text-5xl text-4xl font-extrabold text-outline text-outline-hover text-transparent transition-all duration-500">
                    {service.num}
                  </div>
                  <Link
                    href={service.href}
                    className="w-[50px] h-[50px] sm:w-[70px] sm:h-[70px] rounded-full bg-white group-hover:bg-customAccent transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                  >
                    <BsArrowDownRight className="text-primary text-3xl" />
                  </Link>
                </div>

                <h2 className="text-[32px] sm:text-[40px] font-bold leading-none text-white group-hover:text-customAccent transition-all duration-500">
                  {service.title}
                </h2>
                <p className="text-white/60">{service.description}</p>
                <div className="border-b border-white/20 w-full"> </div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicePage;
