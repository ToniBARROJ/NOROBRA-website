
import './App.css';
import { Header } from './components/Header';
import { Home } from './pages/Home';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"

function App() {
  return (
    <Router>
      
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes> 
      </main>
    </Router>
  );
}

export default App;
