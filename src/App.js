
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Layout from "./Layout";
import Men from "./component/Men";
import Women from "./component/Women";
import Home from "./component/Home";
import Babycollection from "./component/Babycollection";
import Contact from "./component/Contact";
import About from "./component/About";
import Addcart from "./component/Addcart";
import Paymentpage from "./component/Paymentpage";
import PaymentDone from "./component/PaymentDone";
import CreateAccount from "./component/CreateAccount";
import Login from "./component/Login";




function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="men" element={<Men />} />
          <Route path="women" element={<Women />} />
          <Route path="baby" element={<Babycollection />}>
            
          </Route>
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="addcart" element={<Addcart />} />
          <Route path="odernow" element={<Paymentpage />} />
          <Route path="PaymentDone" element={<PaymentDone />} />
          <Route path="Paymentpage" element={<Paymentpage />} />
          <Route path="navcreateacc" element={<CreateAccount/>}/>
          <Route path="login" element={<Login />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
