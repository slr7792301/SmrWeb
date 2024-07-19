import './App.css';
import { HashRouter as Route, Routes } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import Commission from './Commission';

export default function App() {
  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route path='/SmrWeb/' element={ <Home/> } />
        <Route path='/SmrWeb/commission' element={ <Commission/> } />
      </Routes>
    </div>
  );
}