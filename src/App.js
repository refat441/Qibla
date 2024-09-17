import './App.css';
import HomePage from './components/Home-page/HomePage';
import Navbar from './components/Home-page/Navbar';
import { Outlet } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Outlet></Outlet>
      <HomePage></HomePage>
    </div>
  );
}

export default App;
