import React from "react";
import webIcon from "../assets/icon/web.svg";
import shutterstockIcon from "../assets/icon/shutterstock.svg";
import wordpressIcon from "../assets/icon/wordpress.svg";

const ButtonsList = () => {
  const listButton = [
    {
      label: "Personal Website",
      link: "https://pandusetia.my.id/",
      icon: webIcon,
      className: "list-button web",
    },
    {
      label: "Blog",
      link: "https://kumpultech.com/",
      icon: wordpressIcon,
      className: "list-button blog",
    },
    {
      label: "Shutterstock",
      link: "https://www.shutterstock.com/g/Pandu+Setia%20Darmawan",
      icon: shutterstockIcon,
      className: "list-button shutterstock",
    },
  ];

  return (
    <div>
      {listButton.map((list) => (
        <a href={list.link} className={list.className} target="_blank">
          <span>
            <img src={list.icon} width={30} />
          </span>
          {list.label}
        </a>
      ))}
    </div>
  );
};

export default ButtonsList;
