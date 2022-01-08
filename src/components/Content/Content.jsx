import React from "react";
import s from "./Content.module.css";
import Head from "./Head/Head";
import Image from "./Image/Image";
import Post from "./Post/Post";


const Content = () => {
  return (
    <main className={s.content}>
      <Image/>
      <Head />
      <Post/>
    </main>
  );
};

export default Content;