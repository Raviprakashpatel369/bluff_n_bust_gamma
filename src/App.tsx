import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

// Import your page components
import Home from './pages/home/Home';
import Layout from './pages/layout/Layout';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* Nested Routes */}
          <Route index element={<Home />} />
          {/* <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="profile/:userId" element={<Profile />} /> */}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
