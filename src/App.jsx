import { BrowserRouter, Routes, Route, Navigate, } from "react-router-dom";

import NavBar from './components/Header/NavBar.jsx'
import { mFetch } from "../src/components/utils/mFetch.js"
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx'
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer.jsx"
import ItemCount from "./components/ItemCount/ItemCount.jsx"
import CartContainer from "./components/CartContainer/CartContainer.jsx";

import './App.css'



function App() {

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/categoria/:idc" element={<ItemListContainer />} />

        <Route path="/detail/:id" element={<ItemDetailContainer relojes={mFetch()} />} />
        <Route path="/cart" element={<CartContainer />} />


        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      {/* <ItemCount /> */}
    </BrowserRouter>
  )
}

export default App
