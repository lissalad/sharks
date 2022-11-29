import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import Bubbles from "./components/Bubbles";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default App;
