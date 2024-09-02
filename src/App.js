import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Home from './components/Home/Home';
import Projects from './components/Projects/Projects';
import Education from './components/Education/Education';

function App() {
  return (
    <div className=''>
      <Router>
        <Header />
        <div className="mt-5 route-items">
          <Routes>
            <Route path='/projects' element={<Projects />} />
            <Route path='/education' element={<Education />} />
            <Route path='/home' element={<Home />} />
            <Route path='/' element={<Home />} />
            <Route path='*' element={<Home />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
