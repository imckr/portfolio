import React from 'react'
import './SH.css'
import GitHub from '../../assets/Github.svg'
import insta from '../../assets/Instagram.svg'
import LI from '../../assets/LI.svg'
import {gsap} from 'gsap'


const SH = () => {

    const arrowO = "<>"
    const arrowC = "</>"
    
    gsap.fromTo(
      ".port__SH-container",
      {
        opacity: 0,
        y: 10,
      },
      {
        opacity: 1,
        y: 0,
        stagger: 0.1,
        duration: 1,
        ease: "bounce",
        repeat: 5,
      }
    );

  return (
    <div className='port__SH section-padding'>
      <div className='port__SH-container'>
        <div className="port__SH-container_1">
            <h4>{arrowO}</h4>
        </div>
        <div className="port__SH-container_icon">
            <a href="#">
                <img src={GitHub} alt="" />
            </a>
            <a href="#">
                <img src={insta} alt="" />
            </a>
            <a href="#">
                <img src={LI} alt="" />
            </a>
        </div>
        <div className="port-SH-container_2">
            <h4>{arrowC}</h4>
        </div>
      </div>
    </div>
  )
}

export default SH
