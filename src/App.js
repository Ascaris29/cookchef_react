
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import styles from "./App.module.scss";
import Homepage from "./pages/Homepage/Homepage";
//import seedRecipes from "./data/Seed";

//seedRecipes();

export default function App() {
  return (
    <div className={`app-container d-flex flex-column ${styles.appContainer}`}>
      <Header/>
      <Homepage />
      <Footer />
    </div>
  );
}


