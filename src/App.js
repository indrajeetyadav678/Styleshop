
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import "./Mediatablet.css";
import Layout from "./Layout";
import Men from "./component/Men";
import Women from "./component/Women";
import Home from "./component/Home";
import Contact from "./component/Contact";
import About from "./component/About";
import Addcart from "./component/Addcart";
import Paymentpage from "./component/Paymentpage";
import PaymentDone from "./component/PaymentDone";
import CreateAccount from "./component/CreateAccount";
import Login from "./component/Login";
import Kidscollection from "./component/Kidscollection";
import Babycloths from "./component/Babycloths";
import Toys from "./component/Toys";
import SearchProduct from "./component/SearchProduct";
import Likepage from "./component/Likepage";
import Orderform from "./component/Orderform";
import JsonData from "./Jsonfile_datafillForm";
import Footerlink from "./component/Footerlink";
import MenTopWear from "./component/MenCatagory/MenTopWear";




function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="shopname" element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="men" element={<Men />} />
          <Route path="women" element={<Women />} />
          <Route path="kids" element={<Kidscollection />} />
          <Route path="kids" element={<Kidscollection />} />
          <Route path="baby" element={<Babycloths />} />
          <Route path="babytoy" element={<Toys />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="addcart" element={<Addcart />} />
          <Route path="odernow" element={<Paymentpage />} />
          <Route path="PaymentDone" element={<PaymentDone />} />
          <Route path="Paymentpage" element={<Paymentpage />} />
          <Route path="navcreateacc" element={<CreateAccount />} />
          <Route path="navsearch" element={<SearchProduct />} />
          <Route path="navlike" element={<Likepage />} />
          <Route path="login" element={<Login />} />
          <Route path="Orderform" element={<Orderform />} />
          <Route path="orderpayment" element={<Paymentpage />} />
          <Route path="Dataform" element={<JsonData />} />
          //footer Links
          <Route path="cloth" element={<Footerlink />} />
          <Route path="summer" element={<Footerlink />} />
          <Route path="winter" element={<Footerlink />} />
          <Route path="farmal" element={<Footerlink />} />
          <Route path="casual" element={<Footerlink />} />
          //Catagory Links
          <Route path="mentopwear" element={<MenTopWear />} />

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
