import Nav from "./Components/Nav";
import PowerGen from "./Components/PowerGen";
import Header from "./Components/Header";
import CarbonIntensity from "./Components/CarbonIntensity";
import Footer from "./Components/Footer";
import styles from "./Css/App.css";
import { Routes, Route } from "react-router-dom";
import GenerationMix from "./Components/GenerationMix";

function App() {
  return (
    <div className="App">
      <Nav />
      <main className={styles.main}>
        <Header />

        <Routes>
          <Route path="/powergen" element={<PowerGen />}></Route>
          <Route path="/carbonintensity" element={<CarbonIntensity />}></Route>
        </Routes>
        <Footer />
      </main>
    </div>
  );
}

export default App;
