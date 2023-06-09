import { BrowserRouter, Routes, Route, Navigate, } from "react-router-dom";

import NavBar from './components/Header/NavBar.jsx'
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx'
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer.jsx"
import CartContainer from "./components/CartContainer/CartContainer.jsx";
import { CartProvider } from "./context/CartContext.jsx";

import './App.css'



function App() {

  return (
    <CartProvider>

      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/categoria/:categoria/" element={<ItemListContainer />} />

          <Route path="/detail/:id" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<CartContainer />} />


          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>

    </CartProvider>
  )
}

export default App
