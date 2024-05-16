import React from 'react'
import './App.css'
import {Home, Navbar, Welcome, Projects} from './components'
// import { gsap } from "gsap";
// import { ScrollSmoother } from 'gsap-trial/ScrollSmoother';
// import {ScrollTrigger} from 'gsap-trial/ScrollTrigger';
// import SplitType from "split-type";

// gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

// let smoother = ScrollSmoother.create({
//   wrapper: 'smooth-wrapper',
//   content: 'smooth-content'
// });

// let myfunction = () => {
//   let icons = document.querySelector(".port__SH-container_icon");

//   icons.style.display = "flex";

//   // if(icons.style.display === "none") {
//   //   icons.style.display = "flex"
//   // }
//   // else {
//   //   icons.style.display = "none"
//   // }

//   // gsap.fromTo(
//   //   ".port__SH-container",
//   //   {
//   //     opacity: 0,
//   //     y: 10,
//   //   },
//   //   {
//   //     opacity: 1,
//   //     y: 0,
//   //     stagger: 0.1,
//   //     duration: 1,
//   //     ease: "bounce",
//   //     repeat: 5,
//   //   }
//   // );
// };

// const dot = document.querySelector("[data-dot]");
// const dot_outline = document.querySelector("[data-dot-outline]");

// window.addEventListener("mousemove", function (e) {
//   const posX = e.clientX;
//   const posY = e.clientY;

//   dot.style.left = `${posX}px`;
//   dot.style.top = `${posY}px`;
//   //   dot_outline.style.left = `${posX}px`;
//   //   dot_outline.style.top = `${posY}px`;

//   dot_outline.animate(
//     {
//       left: `${posX}px`,
//       top: `${posY}px`,
//     },

//     { duration: 200, fill: "forwards" }
//   );
// });

const App = () => {

  return (
    <div className="App" id="smooth-wrapper">
      {/* <div class="dot" data-dot></div>
      <div class="dot-outline" data-dot-outline></div> */}
      <Welcome />
      <Home />
      <Navbar />
      <Projects />
      {/* <Home />
      <Home />
      <Home />
      <Home /> */}
    </div>
  );
}

export default App
