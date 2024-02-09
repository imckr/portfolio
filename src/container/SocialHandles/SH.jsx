import React from 'react'
import './SH.css'
import GitHub from '../../assets/Github.svg'
import insta from '../../assets/Instagram.svg'
import LI from '../../assets/LI.svg'
import {gsap} from 'gsap'


let myfunction = () => {

  // console.log('myfunction called')

  let sh_icons = document.querySelector('.port__SH-container_icon')

  if(sh_icons.dataset.dis === 'true') {
    sh_icons.style.display = 'flex'
    sh_icons.dataset.dis = 'false'
  } else {
    sh_icons.style.display = 'none'
    sh_icons.dataset.dis = 'true'
  }

  // const container = []

  gsap.fromTo(
    ".port__SH-container_icon",
    {
      opacity: 0,
      y: 10,
    },
    {
      opacity: 1,
      y: 0,
      stagger: 1,
      duration: 2,
      ease: "back.out",
      // repeat: 5,
    }
  );

  // return;
}


const SH = () => {

    const arrowO = "<>"
    const arrowC = "</>"

    // gsap.fromTo(
    //   ".port__SH-container",
    //   {
    //     opacity: 0,
    //     y: 10,
    //   },
    //   {
    //     opacity: 1,
    //     y: 0,
    //     stagger: 0.1,
    //     duration: 1,
    //     ease: "bounce",
    //     repeat: 5,
    //   }
    // );

  return (
    <div className="port__SH section-padding">
      <div className="port__SH-container">
        {/* <div className="port__SH-container_1"> */}
        {/* </div> */}
        <h4>{arrowO}</h4>
        <div className="port__SH-container_icon" data-dis="true">
          <a href="https://github.com/imckr" target="_blank" rel="noreferrer">
            {/* <h6>Github</h6> */}
            <img src={GitHub} alt="GH" />
          </a>
          <a
            href="https://www.instagram.com/imckr_0?utm_source=qr"
            target="_blank"
            rel="noreferrer"
          >
            <img src={insta} alt="INS" />
          </a>
          <a
            href="https://linkedin.com/in/chandra-kumar-rajwal-31774622a"
            target="_blank"
            rel="noreferrer"
          >
            <img src={LI} alt="LI" />
          </a>
        </div>
        <button onClick={myfunction}>
          <h4>{arrowC}</h4>
        </button>
      </div>
    </div>
  );
}

export default SH
