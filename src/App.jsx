import { useState } from 'react'
import './App.css'
import NavBar from './components/Header/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'




function App() {
let greeting = "Hello Word"
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting = {greeting} />
    </div>
  )
}

export default App
