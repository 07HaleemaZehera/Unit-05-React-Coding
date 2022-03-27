
import './App.css';
import { Header } from "./containers/Header";
import {Routes,Route} from "react-router-dom";

import { ProductList } from './containers/ProductList';
import { ProductDetail } from './containers/ProductDetail';




function App() {
  return (
    <>
<Header/>

<Routes>
<Route path="/" element={<ProductList/>}></Route>
<Route path="/product/:productid" element={<ProductDetail/>}></Route>
</Routes>

</>
  
  );
}
export default App;
