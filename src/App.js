// import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header';
import Home from './routes/Home';
import Berries from './routes/Berries';
import About from './routes/About';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />}>Home</Route>
          <Route path='about' element={<About />}>About</Route>
          <Route path='berries' element={<Berries />}>Berries</Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
