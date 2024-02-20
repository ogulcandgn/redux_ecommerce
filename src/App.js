import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import TopHeader from "./components/TopHeader";
import Detail from "./pages/Detail";
import PageContainer from "./containers/PageContainer";
import Navbar from "./components/navbar/Navbar";
import Cart from "./pages/Cart";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="h-full">
      <TopHeader />
      <PageContainer className="h-full">
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products/:id" element={<Detail />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </Router>
      </PageContainer>
      <Footer />
    </div>
  );
}

export default App;
