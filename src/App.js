
import {BrowserRouter, Routes, Route} from "react-router-dom";
import "./index.css";
import Layout from "./Layout";
import Men from "./component/Men";
import Women from "./component/Women";
import Home from "./component/Home";
import Babycollection from "./component/Babycollection";
import Contact from "./component/Contact";
import About from "./component/About";
import Addcart from "./component/Addcart";




function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="home" element={<Home />} />
      <Route path="men" element={<Men/>} />
      <Route path="women" element={<Women />} />
      <Route path="baby" element={<Babycollection />}>
      </Route>
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="addcart" element={<Addcart />} />
      </Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
