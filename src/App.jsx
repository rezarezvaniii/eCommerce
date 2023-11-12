import './App.css';
import Header from './components/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Catalog from './components/Catalog';
import LaptopsPage from "./components/LaptopsPage"
import PcGaming from './components/PcGaming';
import ContactUs from './components/CntactUs';
import Login from './components/Login';
import CatalogLaptop from './components/CatalogLaptop';


function App() {

  return (
    <>

      <Router>
        <Header />
        <Routes>

          <Route path='/login' element={<Login />}/>
          <Route path='/contactus' element={<ContactUs />}/>
          <Route path="/pcgaming" element={<PcGaming />} />
          <Route path="/laptops" element={<LaptopsPage />} />
          <Route path="/catalog/:id" element={<CatalogLaptop />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Home />} />

        </Routes>
      </Router>


    </>
  )
}

export default App
