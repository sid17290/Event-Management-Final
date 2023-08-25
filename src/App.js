import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Society from './pages/Society';
import Societies from './pages/Societies';
import Event from './pages/Event'
import Main_slide from './components/Main_slide';
import Home from './pages/Home';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/main' element={<Home/>}/> {/* replace with Home page */}
          <Route path="/society" element={<Society/>} />
          <Route path='/societies' element={<Societies/>}/>
          <Route path="/event" element={<Event/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
