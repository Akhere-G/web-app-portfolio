import React from "react";
import styles from "./Contact.module.css";
const Contact = () => {
  return (
    <section className='section'>
      <h3>Contact</h3>
      <p className={styles.contactParagraph}>
        If you have any questions, I am happy to answer on my email. On my
        github, you can find many of my projects, web apps and also a few Java
        projects I have created in my spare time. I look forward to hearing from
        you.
      </p>
      <br />
      <hr />

      <p>Email: AkhereAIhoeghinlan@gmail.com</p>
      <p>Github: Akhere-G</p>
    </section>
  );
};

export default Contact;
