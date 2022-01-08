import React from "react";
import s from "./Content.module.css";
import Head from "./Head/Head";
import Image from "./Image/Image";


const Content = () => {
  return (
    <main className={s.content}>
      <Image/>
      <Head/>
    </main>
  );
};

export default Content;