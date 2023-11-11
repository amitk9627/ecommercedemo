import './App.css'
import { Routes, Route } from 'react-router-dom'
import AddToCart from './routes/AddToCart'
import Home from './routes/Home'
import Navbar from './components/Navbar'
const App = () => {
  return (
    <>
    <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/addtocart' element={<AddToCart />} />
        {/* <Route path='/' element={<Home />} /> */}
      </Routes>
    </>
  );
}

export default App;
