import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import Commission from './Commission';
import Footer from './Footer';

export default function App() {
  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route path='/SmrWeb/' element={ <Home/> } />
        <Route path='/SmrWeb/commission' element={ <Commission/> } />
      </Routes>
      <Footer />
    </div>
  );
}