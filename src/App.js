import './App.css';
import { About } from './assets/pages/About';
import { Home } from './assets/pages/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';


function App() {
  return (
    <div>
      <AnimatePresence mode={'wait'}>
      <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>}/>    
                <Route path='/About' element={<About/>}/>
            </Routes>
          </BrowserRouter>
      </AnimatePresence>
    </div>
  );
}

export default App;
