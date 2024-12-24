import { useEffect } from 'react'  
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import Home from './components/pages/home/Home';
import Menu from './components/layouts/menu/Menu';

import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import Coreografias from './components/pages/coreografias/Coreografias';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};





function App() {
  return (
    <Router>
      {/* Notificações com Toastify */}
      <ToastContainer />

      {/* Correção de Scrool Top */}
      <ScrollToTop />

      {/* Menu lateral */}
      <Menu />

      <Routes>
        {/* Rota inicial */}
        <Route path="/" element={<Home />} />
        <Route path="/coreografias" element={<Coreografias />} />



        
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </Router>
  )
}

export default App
