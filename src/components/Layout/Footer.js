import React from "react";
import styles from "../Layout/Footer.module.scss";

function Footer() {
  return (
    <footer className={styles.footer}>
      <p>Copyright@2022</p>
      <p>
        <a href="http://www.google.com"> English-learning-institute.com</a>
      </p>
    </footer>
  );
}

export default Footer;
