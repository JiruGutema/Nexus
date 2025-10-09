
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About/About";
import Home from "./pages/Home/Home";
import Project from "./pages/Project/Project";
import PageNotFound from "./pages/NotFound/NotFound";
import Phone from "./pages/Phone/Phone";
import Samsung from "./pages/Phone/Samsung/Samsung";
import Iphone from "./pages/Phone/Iphone/Iphone";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/project" element={<Project />} />


        <Route path="/phone" element={<Phone />}>
          <Route path="Samsung" element={<Samsung />} />
          <Route path="Iphone" element={<Iphone />} />
        </Route>



        <Route path="/*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
