import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Society from './pages/Society';
import Event from './pages/Event';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/Society" element={<Society/>} />
          <Route path="/Event" element={<Event/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
