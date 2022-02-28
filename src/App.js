import Header from "./components/Header";
import Shark from './components/Shark';
import { Outlet } from 'react-router-dom'
import Gallery from './components/Gallery';

function App() {
  return (
    <div className="App">
      <Header />
      <Outlet />
    </div>
  );
}

export default App;
