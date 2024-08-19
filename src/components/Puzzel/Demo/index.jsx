import React from "react";

import styles from "./index.module.css";

export default function Demo(props) {
  const welcome = (
    <div className={styles.demo_desc}>Demo : Monday, March 11, 2024</div>
  );

  const answer = (
    <a
      className={styles.answer}
      href="https://go.dev/play/p/PhcMuRAwL32"
      target="_blank"
      rel="noreferrer"
    >
      Answer
    </a>
  );

  return (
    <div className={styles.demo} style={{ ...props.style }}>
      {welcome}
      {answer}
    </div>
  );
}
