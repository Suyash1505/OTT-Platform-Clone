import { Routes, Route } from 'react-router-dom';
import Header from './header';
import Login from './pages/login';
import MoodSelector from './pages/MoodSelector';
import FocusedMode from './pages/FocusedMode';
import EntertainMode from './pages/EntertainMode';
import SpiritualMode from './pages/SpiritualMode';

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/mood" element={<MoodSelector />} />
        <Route path="/focused" element={<FocusedMode />} />
        <Route path="/entertain" element={<EntertainMode />} />
        <Route path="/spiritual" element={<SpiritualMode />} />
      </Routes>
    </>
  );
}
