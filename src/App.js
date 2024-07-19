import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import Commission from './Commission';

export default function App() {
  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route path='SmrilluWeb/' element={ <Home/> } />
        <Route path='SmrilluWeb/commission' element={ <Commission/> } />
      </Routes>
    </div>
  );
}