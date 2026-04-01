import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';
import CreateShipment from './pages/CreateShipment';
import TrackPackage from './pages/TrackPackage';
import ShipmentHistory from './pages/ShipmentHistory';
import UpdateShipment from './pages/UpdateShipment';

const AppContent = () => {
  const location = useLocation();
  const hideNavbar = location.pathname === '/login' || location.pathname === '/register' || location.pathname === '/';

  return (
    <>
      {!hideNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/create-shipment" element={<CreateShipment />} />
        <Route path="/track-package" element={<TrackPackage />} />
        <Route path="/shipment-history" element={<ShipmentHistory />} />
        <Route path="/update-shipment/:id" element={<UpdateShipment />} />
      </Routes>
    </>
  );
};

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
