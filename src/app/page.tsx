"use client";
import styles from "./page.module.css";
import Header from "./components/Header";
import Mv from "./components/Mv";
import Subtitle from "./components/Subtitle";
import Photozone from "./components/Photozone";

export default function Home() {
  return (
    <div className={styles.page}>
      <Header />
      <Mv />
      <Subtitle />
      <Photozone />
    </div>
  );
}
