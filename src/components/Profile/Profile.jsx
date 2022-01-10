import React from "react";
import s from "./Profile.module.css"
import Head from "./Head/Head";
import Image from "./Image/Image";
import Post from "./Post/Post";

const Profile = () => {
  return (
    <main>
      <Image />
      <Head />
      <Post />
    </main>
  );
};

export default Profile;