import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Games from './pages/Games';
import Events from './pages/Events';
import EventDetail from './pages/EventDetail';
import StaffPortal from './pages/StaffPortal';

function App() {
  return (
    <Router>
      <div className="app-layout">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/games" element={<Games />} />
            <Route path="/events" element={<Events />} />
            <Route path="/events/:id" element={<EventDetail />} />
            <Route path="/staff" element={<StaffPortal />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
