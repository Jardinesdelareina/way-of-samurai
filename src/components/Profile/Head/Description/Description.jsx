import React from "react";
import s from "./Description.module.css";

const Description = () => {
    return (
      <div className={s.description}>
        <div className={s.description__name}>Андрей Костюк</div>
        <div className={s.description__birthday}>05.08.1992</div>
        <div className={s.description__city}>Архангельск</div>
        <div className={s.description__language}>JavaScript</div>
      </div>
    );
};

export default Description;