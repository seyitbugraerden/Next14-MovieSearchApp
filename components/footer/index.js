import React from "react";
import Link from "next/link";
import styles from "./styles.module.css";
function Footer() {
  return (
    <footer className={styles.footer}>
      Made with ❤️ by&nbsp;
      <Link href="https://github.com/seyitbugraerden" target="_blank">
        Seyit Buğra Erden
      </Link>
    </footer>
  );
}

export default Footer;
