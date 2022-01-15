import React from "react";
import s from "./About.module.scss";

const About = () => {
  return (
    <div className={s.about__container}>
      <h1>Social Network</h1>
      <i>Андрей Костюк, Junior Web-Developer</i>
    </div>
  );
};

export default About;