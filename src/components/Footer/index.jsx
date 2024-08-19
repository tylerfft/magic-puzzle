import React from "react";
import styles from "./index.module.css";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <ul>
        <a href="https://github.com/tylerfft" target="_blank" rel="noreferrer">
          <li></li>
        </a>
        <a
          href="https://www.linkedin.com/in/tyler-fft"
          target="_blank"
          rel="noreferrer"
        >
          <li></li>
        </a>
        <a
          href="https://leetcode.cn/u/knight-gogogo/"
          target="_blank"
          rel="noreferrer"
        >
          <li></li>
        </a>
      </ul>
    </div>
  );
}
