import './App.css';
import NavBar from './Components/NavBar/NavBar';
import Footer from './Components/Footer/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Features from './pages/Features/Features';
import Pricing from './pages/Pricing/Pricing';
import Resources from './pages/Resources/Resources';
import Login from './pages/Login/Login';
import SignUp from './pages/SignUp/SignUp'
import NotFound from './pages/NotFound/NotFound';
function App() {
  return (
    <div className="App">

      <Router>

        <NavBar />
        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/Features" element={<Features />} />
          <Route path="/Pricing" element={<Pricing />} />
          <Route path="/Resources" element={<Resources />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="*" element={<NotFound/>}/>
        </Routes>
        <Footer />

      </Router>


</div>
  );
}

export default App;
