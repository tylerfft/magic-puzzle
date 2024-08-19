import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Puzzel from "./components/Puzzel";
import styles from "./App.module.css";

export default function App() {
  return (
    <div className={styles.container}>
      <Header />
      <Puzzel />
      <Footer />
    </div>
  );
}
