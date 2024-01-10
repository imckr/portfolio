import React from "react";
import "./Home.css";
// import Welcome from '../Welcome/Welcome';
import { gsap } from "gsap";
import SplitType from "split-type";
import Background from "../../container/Background";

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
      ease: "back.inOut",
      repeat: -1,
    }
  );

  return (
    <div className="home-page">
      <Background/>
      <div className="home-name">
        <h1 className="text">Hii,</h1><br />
        <h1 className="text">im__ckr</h1>
      </div>
    </div>
  );
};

export default Home;
