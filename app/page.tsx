import Photo from "@/components/Photo";
import Socials from "@/components/Socials";
import Stats from "@/components/Stats";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

export default function Home() {
  return (
    <section className="h-full">
      {" "}
      <div className="sm:mx-16 mx-8">
        <div className="flex flex-col xl:flex-row justify-between items-center xl:pt-4 xl:pb-4">
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Software Developer</span>
            <h1 className="text-3xl mb-6">
              Hello I&apos;m <br />{" "}
              <span className="text-customAccent font-semibold">
                Gopal Kumar Saha
              </span>
            </h1>
            <p className="mzx-w-[500px] mb-9 text-white/80 text-justify">
              {" "}
              Highly motivated and results-driven Software Engineer with above 3
              years of professional experience specializing in full-stack web
              development. Proficient in modern front-end frameworks like
              React.js, Angular, and Next js, alongside back-end technologies
              such as Node.js, Express, MySQL, and MongoDB. Adept at designing
              and building scalable web applications, API development, and
              database management. Strong collaborator with a passion for
              continuous learning and innovation.
            </p>

            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button
                variant="outline"
                size="lg"
                className="uppercase flex items-center gap-2"
              >
                <span>Download CV</span>
                <FiDownload className="text-xl" />
              </Button>

              <div className="mb-8 xl:mb-0">
                <Socials
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-customAccent rounded-full flex justify-center items-center text-customAccent text-base hover:bg-customAccentHover hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>
          <div className="order-1 xl:order-none mb-8 xl:mb-0 ">
            <Photo />
          </div>
        </div>

        <Stats />
      </div>{" "}
    </section>
  );
}
