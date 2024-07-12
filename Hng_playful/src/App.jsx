import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import {Navbar} from "./component/navbar";
import { Shop } from './pages/shop/shop';
import { Cart } from './pages/cart/cart';
import Hero from './component/hero';
import Display from './component/display';
import Footer from './component/foooter';
import All from './component/all';




function App() {
  return <div className='App'>
    <Router>
      <Navbar/>
      <Hero/>
      <All/>
      <Display/>
      <Footer/>
      <Routes>
        <Route path="/" element={<Shop/>}/>
        <Route path="/cart" element={<Cart/>}/>

      </Routes>
    </Router>
  </div>

}

export default App
