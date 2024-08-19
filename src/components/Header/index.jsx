import React from "react";
import styles from "./index.module.css";

export default function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.navbar_start}>
        <div className={styles.nav_logo}></div>
        <div>Alan's Game</div>
      </div>
      <ul className={styles.navbar_end}>
        <li>
          <a
            href="https://github.com/tylerfft"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/tyler-fft"
            target="_blank"
            rel="noreferrer"
          >
            Linkedin
          </a>
        </li>
        <li>
          <a
            href="https://leetcode.cn/u/knight-gogogo/"
            target="_blank"
            rel="noreferrer"
          >
            Leetcode
          </a>
        </li>
      </ul>
    </div>
  );
}
