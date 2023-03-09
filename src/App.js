
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import styles from "./App.module.scss";
import Homepage from "./pages/Homepage/Homepage";
import { useState } from "react";
//import seedRecipes from "./data/Seed";

//seedRecipes();

export default function App() {

  const [page, setPage] = useState('homepage');
  return (
    <div className={`app-container d-flex flex-column ${styles.appContainer}`}>
      <Header setPage={ setPage }/>
      {/* systeme D de rooting */}
      {/* si ma variable page correspond à homepage, on envoie le composant homepage */}
      { page === 'homepage'&&  <Homepage /> }
      <Footer />
    </div>
  );
}


