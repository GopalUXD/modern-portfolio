import React from "react";
import Link from "next/link";
import { Button } from "./ui/button";
import Nav from "./Nav";
import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <header className="py-8 xl:py-12 sm:mx-20 mx-12">
      <div className="flex justify-between items-center">
        <Link href="/">
          <h1 className="text-4xl font-semibold">
            Gopal<span className="text-customAccent">.</span>
          </h1>
        </Link>

        <div className="hidden xl:flex items-center gap-8">
          <Nav />
          <Link href="/contact">
            {" "}
            <Button>Hire Me</Button>
          </Link>
        </div>

        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
