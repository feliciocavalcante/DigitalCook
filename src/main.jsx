import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import LoginPage from './pages/LoginPage.jsx'
import Receita1 from './pages/Receita1.jsx'
import Receita2 from './pages/Receita2.jsx'
import Receita3 from './pages/Receita3.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/Login" element={<LoginPage />} />
         <Route path="/Receita1" element={<Receita1 />} />
         <Route path="/Receita2" element={<Receita2 />} />
         <Route path="/Receita3" element={<Receita3 />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
