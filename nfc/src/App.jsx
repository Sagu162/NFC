import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Landing from './Pages/Landing/Landing';
import Header from './Layout/Header';
import Login from './Auth/Login';
import Signup from './Auth/Signup';
function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Routes>
        <Route>
          {/* <Header /> */}
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Route>
      </Routes>
    </Router>
    
  )
}

export default App
