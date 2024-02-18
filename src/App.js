import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import TopHeader from "./components/TopHeader";
import Detail from "./pages/Detail";
import PageContainer from "./containers/PageContainer";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <div>
      <TopHeader />
      <PageContainer>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </Router>
      </PageContainer>
    </div>
  );
}

export default App;
