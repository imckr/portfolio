import React from 'react'
import './Background.css'

const Background = (props) => {

  let l1 = props.l1
  let l2 = props.l2
  return (
    <div className="port__background-slogan">
      {/* <div className="port__bg-text"> */}
      <h1 className="slogan-line1">{l1}</h1>
      <h1 className="slogan-line2">{l2}</h1>
      {/* </div> */}
    </div>
  );
}

export default Background
