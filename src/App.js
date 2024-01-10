import React from 'react'
import './App.css'
import {Home, Navbar, Welcome} from './components'
import { gsap } from "gsap";
import SplitType from "split-type";


const App = () => {

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
      ease: "power4.out",
      repeat: 4,
    }
  );

  return (
    <div className="App">
      {/* <div className='home-line'></div> */}
      <Welcome />
      <Home />
      <Navbar />
      <Home />
      <Home />
      <Home />
      <Home />
    </div>
  );
}

export default App
