import React from "react";
import instagramIcon from "../assets/icon/instagram_2.svg";
import linkedinIcon from "../assets/icon/linkedin.svg";
import githubIcon from "../assets/icon/github.svg";

const Buttons = () => {
  const buttonsList = [
    {
      label: "Instagram",
      icon: instagramIcon,
      link: "https://www.instagram.com/pandusetia.d/",
      className: "buttons-item instagram",
    },
    {
      label: "LinkedIn",
      icon: linkedinIcon,
      link: "https://www.linkedin.com/in/pandu-setia-darmawan-b4297a278",
      className: "buttons-item linkedin",
    },
    {
      label: "Github",
      icon: githubIcon,
      link: "https://github.com/codewithpandu",
      className: "buttons-item github",
    },
  ];

  return (
    <div className="wrapper-buttons">
      {buttonsList.map((button) => (
        <a href={button.link} className={button.className} target="_blank">
          <span>
            <img src={button.icon} width={30} />
          </span>
        </a>
      ))}
    </div>
  );
};

export default Buttons;
