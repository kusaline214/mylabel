"use client";
import styles from "./page.module.css";
import Header from "./components/Header";
import Mv from "./components/Mv";
import Subtitle from "./components/Subtitle";
import Photozone from "./components/Photozone";
import BusinessDitail from "./components/BusinessDitail";
import CeoGreeting from "./components/CeoGreeting";
import CorporateInfo from "./components/CorporateInfo";
import CorporateInfo2 from "./components/CorporateInfo2";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className={styles.page}>
      <Header />
      <Mv />
      <Subtitle />
      <Photozone />
      <BusinessDitail />
      <CeoGreeting />
      <CorporateInfo />
      <CorporateInfo2 />
      <ContactForm />
      <Footer />
    </div>
  );
}
