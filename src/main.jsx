import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { initFirebase } from './firebase/config'
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

initFirebase()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ToastContainer/>
    <App />
  </React.StrictMode>,
)
