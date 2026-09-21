import { Route, Routes } from "react-router-dom";
import { AboutPage } from "./components/about/AboutPage";
import { Home } from "./components/home/Home";
import { Header } from "./components/header/Header";
import { SubHeader } from "./components/header/SubHeader";
import { Footer } from "./components/footer/Footer";
import { MenuPage } from "./components/menu/MenuPage";
import { MobileApp } from "./components/mobileApp/MobileApp";
import "./Style.css";
import "./Style02.css";
import "./App.css";

function App() {
  return (
    <div className="container-fluid bg_container p-0">
      <SubHeader />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pages" element={<AboutPage />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/delivery" element={<MobileApp />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
