import React from "react";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa";

const socialLink = [
  { icon: <FaGithub />, path: "https://github.com/GopalUXD" },
  {
    icon: <FaLinkedin />,
    path: "https://www.linkedin.com/in/gopal-kumar-saha-094a471b5/",
  },
  { icon: <FaInstagram />, path: "https://www.instagram.com/dipu_sahaaa/" },
  { icon: <FaFacebook />, path: "https://www.facebook.com/dipu.saha.01/" },
];

interface SocialsProps {
  containerStyles: string;
  iconStyles: string;
}

const Socials = ({ containerStyles, iconStyles }: SocialsProps) => {
  return (
    <div className={containerStyles}>
      {socialLink.map((item, index) => {
        return (
          <Link
            key={index}
            href={item.path}
            className={iconStyles}
            target="_blank"
          >
            {" "}
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
