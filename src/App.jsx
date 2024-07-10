import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Footer from "./components/Footer";

import "./App.scss";
import Single from "./pages/Single";
import Cart from "./pages/Cart";

const App = () => {
  return (
    <Router>
      <Header />
      <main className="pt-[100px]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Shop" element={<Shop />} />
          <Route path="/Cart/:id" element={<Cart />} />
          <Route path="/Single/:id" element={<Single />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
