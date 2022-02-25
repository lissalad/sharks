import './App.css';
import Header from "./components/Header";
import Shark from './components/Shark';
import { Outlet } from 'react-router-dom'
import Gallery from './components/Gallery';

function App() {
  return (
    <div className="App bg-gradient-to-b from-blue-400 to-blue-900">
      <Header />
      <Outlet />
    </div>
  );
}

export default App;
