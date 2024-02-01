import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './pages/homePage'
import SignIn from './pages/sign-in'
import Profil from './pages/profil'

import { library } from '@fortawesome/fontawesome-svg-core';
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';
library.add(faCircleUser);

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/profil" element={<Profil />} />
      </Routes>
    </Router>
  )
}

export default App
