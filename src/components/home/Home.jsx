import React from "react";
import "./Home.css";
// import Welcome from '../Welcome/Welcome';
import { gsap } from "gsap";
import SplitType from "split-type";
import Background from "../../container/Background/Background";
import SH from "../../container/SocialHandles/SH";
import RL from "../../container/RolesLine/RL"
import mouseImg from "../../assets/computer-mouse.svg"


const Home = () => {
  const text = new SplitType(".text", { types: "chars" });
  // alert(text)
  const char = text.chars;
  // alert(char.toString)

  gsap.fromTo(
    char,
    {
      y: 100,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      stagger: 0.1,
      duration: 1,
      delay: 10,
      ease: "back.inOut",
      // repeat: 0,
      repeatDelay: 3,
    }
  );

  return (
    <div className="home-page" id="HOME smooth-content">
      <div className="mouse-img">
        <img src={mouseImg} alt="img-1" />
      </div>
      <Background l1="INSPIRE" l2="HOPE &"/>
      <div className="home-name">
        <h1 className="text">Hii,</h1><br />
        <h1 className="text">im__CKR</h1>
      </div>
      <RL/>
      <SH/>
    </div>
  );
};

export default Home;
