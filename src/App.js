import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing from './components/Landing/Landing';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Landing />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
