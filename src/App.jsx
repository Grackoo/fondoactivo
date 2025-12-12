import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Education from './pages/Education';
import InstrumentDetail from './pages/InstrumentDetail';
import Tools from './pages/Tools';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <main style={{ minHeight: '80vh', padding: '20px 0' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/education" element={<Education />} />
            <Route path="/education/:id" element={<InstrumentDetail />} />
            <Route path="/tools" element={<Tools />} />
          </Routes>
        </main>
        <footer style={{ background: 'var(--color-primary)', color: 'white', padding: '20px', textAlign: 'center' }}>
          <p>&copy; 2025 Fondo Activo. Todos los derechos reservados.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
