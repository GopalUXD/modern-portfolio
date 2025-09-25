"use client";

import React from "react";
import Link from "next/link";
import { Button } from "./ui/button";
import Nav from "./Nav";
import MobileNav from "./MobileNav";
import { toast } from "sonner";

const Header = () => {
  return (
    <header className="py-8 xl:py-12 sm:mx-16 mx-8">
      <div className="flex justify-between items-center">
        <Link href="/">
          <h1 className="text-4xl font-semibold">
            Gopal<span className="text-customAccent">.</span>
          </h1>
        </Link>

        <div className="hidden xl:flex items-center gap-8">
          <Nav />
          {/* <Link href="/contact"> */}{" "}
          <Button onClick={() => toast.success("Thank you for your interest")}>
            Hire Me
          </Button>
          {/* </Link> */}
        </div>

        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
