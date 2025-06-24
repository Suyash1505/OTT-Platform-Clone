import { Routes, Route } from 'react-router-dom';
import Header from './header';
import Home from "./pages/home"
import Browse from "./pages/browser"
import Watch from "./pages/watch"
import Login from "./pages/login"
import './styles/global.css';


export default function App() {

  return (
  <>
    <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/browse" element={<Browse />} />
        <Route path="/watch" element={<Watch />} />
        <Route path="/login" element={<Login />} />
      </Routes> 
  </>
  );
}
