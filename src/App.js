
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
import MenBottomWear from "./component/MenCatagory/MenBottomwear";
import MenEthicWear from "./component/MenCatagory/MenEthicWear";
import MenFootWear from "./component/MenCatagory/MenFootWear";
import MenInnerWear from "./component/MenCatagory/MenInnerWear";

import WomenTopWear from "./component/WomenCatagory/WomenTopWear";
import WomenEthicWear from "./component/WomenCatagory/WomenEthicWear";
import WomenFootWear from "./component/WomenCatagory/WomenFootWear";
import WomenInnerWear from "./component/WomenCatagory/WomenInnerWear";
import WomenBottomwear from "./component/WomenCatagory/WomenBottomwear";

import KidwearBottomwear from "./component/KidwearCatagory/KidwearBottomwear";
import KidwearEthicWear from "./component/KidwearCatagory/KidwearEthicWear";
import KidwearFootWear from "./component/KidwearCatagory/KidwearFootWear";
import KidwearInnerWear from "./component/KidwearCatagory/KidwearInnerWear";
import KidwearTopWear from "./component/KidwearCatagory/KidwearTopWear";

import BornBaby from "./component/BabyCatagory/BornBaby";
import SixMonthBaby from "./component/BabyCatagory/SixMonthBaby";
import Footwear from "./component/BabyCatagory/Footwear";
import YearsBaby from "./component/BabyCatagory/YearsBaby";
import BabyCares from "./component/BabyCatagory/BabyCares";
import Product_info from "./component/Product_info";



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
          <Route path="mencat1" element={<MenTopWear />} />
          <Route path="mencat2" element={<MenBottomWear />} />
          <Route path="mencat3" element={<MenEthicWear />} />
          <Route path="mencat4" element={<MenFootWear />} />
          <Route path="mencat5" element={<MenInnerWear />} />

          <Route path="mencat6" element={<WomenTopWear/>} />
          <Route path="mencat7" element={<WomenBottomwear />} />
          <Route path="mencat8" element={<WomenEthicWear />} />
          <Route path="mencat9" element={<WomenFootWear />} />
          <Route path="mencat10" element={<WomenInnerWear />} />

          <Route path="mencat11" element={<KidwearTopWear />} />
          <Route path="mencat12" element={<KidwearBottomwear />} />
          <Route path="mencat13" element={<KidwearEthicWear />} />
          <Route path="mencat14" element={<KidwearFootWear />} />
          <Route path="mencat15" element={<KidwearInnerWear />} />

          <Route path="mencat16" element={<BornBaby />} />
          <Route path="mencat17" element={<SixMonthBaby />} />
          <Route path="mencat18" element={<YearsBaby />} />
          <Route path="mencat19" element={<Footwear />} />
          <Route path="mencat20" element={<BabyCares />} />
          <Route path="productinfo" element={<Product_info />} />

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
