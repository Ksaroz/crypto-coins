import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Coins from "./components/Coins";
import Exchanges from "./components/Exchanges";
import CoinsDetail from "./components/CoinDetails";
import Footer from "./components/Footer";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/coins"} element={<Coins />} />
        <Route path={"/coin/:id"} element={<CoinsDetail />} />
        <Route path={"/exchanges"} element={<Exchanges />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
