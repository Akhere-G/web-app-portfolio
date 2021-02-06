import React from "react";
import ReactIcon from "../../assets/reactIcon.svg";
import mongoDbIcon from "../../assets/mongodb.svg";
import nodejsIcon from "../../assets/nodejs.svg";
import firebaseIcon from "../../assets/firebase.svg";
import expressjsIcon from "../../assets/expressjs.svg";
import gatsbyjsIcon from "../../assets/gatsbyjs.svg";

import { Cards } from "../../components";

const cards = [
  { title: "react", src: ReactIcon, position: 0 },
  { title: "mongoDB", src: mongoDbIcon, position: 1 },
  { title: "nodejs", src: nodejsIcon, position: 2 },
  { title: "firebase", src: firebaseIcon, position: 3 },
  { title: "expressjs", src: expressjsIcon, position: 4 },
  { title: "gatsbyjs", src: gatsbyjsIcon, position: 5 },
];
const About = () => {
  return (
    <section className='section'>
      <h3>About Me</h3>
      <p>
        My name is Akhere Ihoeghinlan. I am a Computer Science student at UCL
        and a web developer, who is passionate about building intresting
        websites. Here are some of the frameworks that I have made projects in.
      </p>
      <Cards cards={cards} />
    </section>
  );
};

export default About;
