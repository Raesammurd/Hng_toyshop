import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import {Navbar} from "./component/navbar";
import { Shop } from './pages/shop/shop';
import { Cart } from './pages/cart/cart';
import Hero from './component/hero';
import Display from './component/display';





function App() {
  return <div className='App'>
    <Router>
      <Navbar/>
      <Hero/>
      <Display/>
   
      <Routes>
        <Route path="/" element={<Shop/>}/>
        <Route path="/cart" element={<Cart/>}/>

      </Routes>
    </Router>
  </div>

}

export default App
