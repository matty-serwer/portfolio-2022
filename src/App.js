import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing from './components/Landing/Landing';
import Navbar from './sass/Navbar';

function App() {
  return (
    <div>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Landing />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
