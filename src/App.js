import './App.css';
import Navbar from './components/Home-page/Navbar';
import HeaderHomePage from './components/Home-page/HeaderHomePage';
import { Outlet } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  );
}

export default App;
