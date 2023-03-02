import styles from "./page.module.css";
import Navbar from "components/Navbar";
import Landing from "components/Landing";
import MainSection from "components/MainSection";
import Collection from "components/Collection";
import Vision from "components/Vision";

export default function Home() {
  return (
    <main>
      <Landing />
      <MainSection />
      <Collection />
      <Vision />
    </main>
  );
}
