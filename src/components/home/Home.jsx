import React from "react";
import "./Home.css";
// import Welcome from '../Welcome/Welcome';
import { gsap } from "gsap";
// import SplitType from "split-type";

const Home = () => {
  // gsap.to(".text", { duration:})
  // const text = new SplitType(".text", { types: "chars" });
  // // alert(text)
  // const char = text.chars;
  // // alert(char.toString)

  // gsap.fromTo(
  //   char, 
  //   {
  //     y : 100,
  //     opacity : 0
  //   },
  //   {
  //     y : 0,
  //     opacity : 1,
  //     stagger : 0.1,
  //     duration : 1,
  //     ease : 'power4.out',
  //     repeat: 1,
  //   });

  return (
    <div className="home-page">
      {/* <Welcome/> */}
    </div>
  );
};

export default Home;
