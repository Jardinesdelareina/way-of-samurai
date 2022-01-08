import React from 'react';
import s from "./Image.module.css";

const Image = () => {
    return (
      <div className={s.content__image}>
        <img className={s.background} src="background.jpg" />
      </div>
    );
};

export default Image;