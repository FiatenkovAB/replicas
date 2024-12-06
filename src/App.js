import { BrowserRouter, Routes,Route } from "react-router-dom";
import Main from "./components/Main/Main"
import Header from "./components/Header/Header"
import Reproductions from "./components/Reproductions/Reproductions"
import Products from "./components/NewProducts/Products"
import AboutUs from "./components/AboutUs/AboutUs"
import Collection from "./components/CollectionNew/Collection";
import Franc from "./components/CollectionNew/newPages/Franc";

function App() {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
      <Route path="/" element={<Main/>}/>
      <Route path="Reproductions" element={<Reproductions/>}/>
      <Route path="Products" element={<Products/>}/>
      <Route path="AboutUs" element={<AboutUs/>}/>
      <Route path="Collection" element={<Collection/>}/>
      <Route path="Franc" element={<Franc/>}/>
     </Routes>
    </BrowserRouter>
  );
}

export default App;
