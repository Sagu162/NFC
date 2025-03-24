import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Landing from './Pages/Landing/Landing';
import Login from './Auth/Login';
import Signup from './Auth/Signup';
import AdminDashboard from './Pages/Dashboard/AdminDashboard/AdminDashboard';
function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Routes>
        <Route>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/admin" element={<AdminDashboard />} />
        </Route>
      </Routes>
    </Router>
    
  )
}

export default App
