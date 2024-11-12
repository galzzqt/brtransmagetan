import { Routes, Route }  from "react-router-dom"
import Home from './pages/Home.jsx'
import Armada from './pages/Armada.jsx'
import Kontak from './pages/Kontak.jsx'
import Service from './pages/Service.jsx'
import Faq from './pages/Faq.jsx'

import './dist/css/main.css'
import './dist/css/armada.css'
import './dist/css/kontak.css'
import './dist/css/service.css'
import './dist/css/faq.css'
import './dist/css/home.css'

import NavbarComp from './components/NavbarComp.jsx'
import FooterComp from './components/FooterComp.jsx'

function App() {
  return (
    <div>
      <NavbarComp />


      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/armada" Component={Armada} />
        <Route path="/kontak" Component={Kontak} />
        <Route path="/service" Component={Service} /> 
        <Route path="/faq" Component={Faq} />
      </Routes>


      <FooterComp />
    </div>
  )
}

export default App
