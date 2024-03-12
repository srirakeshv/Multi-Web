import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./Pages/Homepage/Homepage";
import ServicePage from "./Pages/ServicePage/ServicePage";
import ScrollToTop from "./scrolltotop";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/ServicePage" element={<ServicePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
