// import Login from './pages/LoginPage';
import Register from './pages/RegisterPage';
import NavBar from './components/NavBar';
import SectionA from './components/SectionA';
import SectionB from './components/SectionB';
import SectionC from './components/SectionC';
import Footer from './components/Footer';
import TechStack from './pages/TechStack';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css';
// ...

function App() {
  return (
    <div className="main">
      <Router>
        <Routes>
          <Route path="/" element={<Register />} />
        </Routes>
        {/* <Routes>
          <Route path="/" element={<Login />} />
        </Routes> */}
        <Routes>
          <Route path="/Home" element={<NavBar />} />
        </Routes>
        <Routes>
          <Route path="/Home" element={<SectionA />} />
        </Routes>
        <Routes>
          <Route path="/Home" element={<SectionB />} />
        </Routes>
        <Routes>
          <Route path="/Home" element={<SectionC />} />
        </Routes>
        <Routes>
          <Route path="/Home" element={<Footer />} />
        </Routes>
        <Routes>
          <Route path="/Home/Node" element={<TechStack />} />
        </Routes>
        <Routes>
          <Route path="/Home/React" element={<TechStack />} />
        </Routes>
        <Routes>
          <Route path="/Home/Express" element={<TechStack />} />
        </Routes>
        <Routes>
          <Route path="/Home/Mongo" element={<TechStack />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
