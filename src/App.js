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
