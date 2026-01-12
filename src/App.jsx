import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import ContactPage from './pages/ContactPage';
import ServicePage from './pages/ServicePage';
import ProjectsPage from './pages/ProjectsPage';
import './App.css';

import { HelmetProvider } from 'react-helmet-async';

function App() {
    return (
        <HelmetProvider>
            <Router>
                <div className="app-container">
                    <Header />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/contact" element={<ContactPage />} />
                        <Route path="/services/:slug" element={<ServicePage />} />
                        <Route path="/projects" element={<ProjectsPage />} />
                        <Route path="*" element={<Home />} />
                    </Routes>
                    <Footer />
                </div>
            </Router>
        </HelmetProvider>
    );
}

export default App
