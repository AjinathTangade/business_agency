import ComponentsExport from "./components/ComponentsExport";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      {/* <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="about" element={ <About/> } />
        <Route path="contact" element={ <Contact/> } />
      </Routes> */}
    
      <Header />
      <ComponentsExport />
      <Footer />
    </>
  );
}

export default App;
