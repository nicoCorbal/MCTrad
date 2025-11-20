import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ContactPage from './pages/ContactPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="sobre-mi" element={<AboutPage />} />
          <Route path="servicios" element={<ServicesPage />} />
          <Route path="contacto" element={<ContactPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
