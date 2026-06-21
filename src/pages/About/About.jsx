import ReactIcon from "../../assets/reactIcon.svg";
import mongoDbIcon from "../../assets/mongodb.svg";
import nodejsIcon from "../../assets/nodejs.svg";
import expressjsIcon from "../../assets/expressjs.svg";
import sqlalchemyIcon from "../../assets/sqlalchemy.png";
import fastAPIIcon from "../../assets/fastAPIIcon.png";
import nextJsIcon from "../../assets/nextJsIcon.png";
import flaskIcon from "../../assets/flaskIcon.png";

import { Cards } from "../../components";

const cards = [
  { title: "react", src: ReactIcon },
  { title: "nextJs", src: nextJsIcon },
  { title: "fastAPI", src: fastAPIIcon },
  { title: "sqlalchemy", src: sqlalchemyIcon },
  { title: "flaskIcon", src: flaskIcon },
  { title: "mongoDB", src: mongoDbIcon },
  { title: "nodejs", src: nodejsIcon },
  { title: "expressjs", src: expressjsIcon },
];

const About = () => {
  return (
    <section className='section'>
      <h3>About Me</h3>
      <p>
        Graduating with a Computer Science degree from UCL, I transitioned directly into industry, building scalable applications as a Software Engineer at Arkiter and FundApps. I subsequently pursued a PGCE at King's College London to master pedagogical strategy, allowing me to bridge the gap between technical theory and practical classroom delivery. Currently, as a Computer Science Teacher at Ada (National College for Digital Skills), I design advanced curricula and industry-aligned full-stack resources for T-Level and BTEC cohorts. I am now seeking to return to full-time Software Engineering to apply my robust technical foundation and matured collaborative experience toward solving complex, high-impact technical problems.
      </p>
      <Cards cards={cards} />
    </section>
  );
};

export default About;
