import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import HomePage from './pages/homePage';
import SignIn from './pages/sign-in';

function App() {
  return (
    <Router>
    <Routes>
    <Route path="/" element={<HomePage />}/>
    <Route path="/login" element={<SignIn />}/>
    </Routes>
    </Router>
    );
  }
  
  export default App;
  