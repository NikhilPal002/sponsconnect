import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Navbar from './components/Navbar';
import { Home } from './components/Home';


function App() {
  return (
    <div>
      <Router>
        <Navbar/>
        <div className="container">
          <Routes>
            <Route exact path="/" element={<Home/>} />
          </Routes>
        </div>
      </Router>
      This is react app
    </div>
  );
}

export default App;
