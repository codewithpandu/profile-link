import React from "react";
import { Squeeze as Hamburger } from "hamburger-react";
import profilImg from "../assets/img/profil.jpg";
import Buttons from "./Buttons";
import ButtonsList from "./ButtonsList";
import linkIcon from "../assets/icon/link.svg";

const Home = () => {
  return (
    <div className="wrapper-profil">
      {/* <div className="flex justify-end">
        <Hamburger size={20} />
      </div> */}
      <div className="avatar">
        <figure>
          <img src={profilImg} alt="profil" width={150} className="profil" />
          <h2 className="text-3xl font-[600] mt-8 ">Pandu Setia D</h2>
        </figure>
        <p className="text-zinc-300 text-sm">Kebumen, Jawa Tengah</p>
      </div>
      <Buttons />
      <div className="mt-16">
        <p className="text-xl py-2 flex gap-2 items-center">
          <span>
            <img src={linkIcon} width={25} />
          </span>
          Links
        </p>
        <ButtonsList />
        <div className="pt-16"></div>
      </div>
    </div>
  );
};

export default Home;
