/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */


import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Vision from './pages/Vision';
import Achievements from './pages/Achievements';
import Initiatives from './pages/Initiatives';
import Constituency from './pages/Constituency';
import Join from './pages/Join';
import Contact from './pages/Contact';
import DMKInfo from './pages/DMKInfo';
import Gallery from './pages/Gallery';
import News from './pages/News';
import Events from './pages/Events';

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/vision" element={<Vision />} />
          <Route path="/achievements" element={<Achievements />} />
          <Route path="/initiatives" element={<Initiatives />} />
          <Route path="/constituency" element={<Constituency />} />
          <Route path="/join" element={<Join />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/dmk" element={<DMKInfo />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/news" element={<News />} />
          <Route path="/events" element={<Events />} />
        </Routes>
      </Layout>
    </Router>
  );
}

