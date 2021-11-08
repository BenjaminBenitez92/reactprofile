import React from 'react';
import Me from "../../images/ME.JPEG"
import "./style.css";
export default function About() {
  return (
    <div>
      <h1>About Me</h1>
    <div> 
      <img src={Me} alt="myself" className= "myself" ></img>
    </div>,
      <p>
        Hello, My name is Benjamin Benitez, but you can call me Ben.
        I been learning to become a full-stack developer for the past 6 months.
        A little about my past, I been working in the auto parts for 9 years and currently and Store Manger for O'Reilly Auto Parts
      </p>
      <h1>Skills</h1>
      <li>HTML5</li>
      <li>CSS(kinda)</li>
      <li>JavaScript</li>
      <li>Node.js</li>
      <li>PWA</li>
      <li>MySQL</li>
      <li>NoSql</li>
      <li>Express</li>
      <li>React</li>
    </div>
  );
}
