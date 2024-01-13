import React from 'react'
import './App.css'
import {Home, Navbar, Welcome} from './components'
// import { gsap } from "gsap";
// import { ScrollSmoother } from 'gsap-trial/ScrollSmoother';
// // import SplitType from "split-type";

// gsap.registerPlugin(ScrollSmoother)

// let smoother = ScrollSmoother.create({
//   smooth: 2,
//   effects: true,
//   normalizeScroll: true,
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

const App = () => {

  return (
    <div className="App">
      <Welcome />
      <Home />
      <Navbar />
      {/* <Home />
      <Home />
      <Home />
      <Home /> */}
    </div>
  );
}

export default App
