//import Content from "./components/Content";
//import Footer from "./components/Footer";
import Header from "./components/Header";
import styles from "./App.module.scss";

export default function App() {
  return (
    <div className={`app-container d-flex flex-column ${styles.appContainer}`}>
      <Header/>
      {/*<Content />
      <Footer />*/}
    </div>
  );
}


