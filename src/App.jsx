import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Detail from "./pages/Detail";
import Add from "./pages/Add";
import Edit from "./pages/Edit";
import PageNotFound from "./pages/PageNotFound";

function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product" element={<Product />} />
            <Route path="/detail" element={<Detail />} />
            <Route path="/add" element={<Add />} />
            <Route path="/edit" element={<Edit />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
