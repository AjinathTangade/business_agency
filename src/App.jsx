
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
function App() {
  return (
    <>
      {/* <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="about" element={ <About/> } />
        <Route path="contact" element={ <Contact/> } />
      </Routes> */}

      <Header />
      <Home />
      <Footer />
    </>
  );
}

export default App;
