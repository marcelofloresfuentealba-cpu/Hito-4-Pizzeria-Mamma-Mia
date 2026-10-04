
import { Routes, Route, Navigate } from 'react-router-dom'
import Navbar from './components/NavBar.jsx'
import Home from './pages/Home.jsx'
import PizzaDetail from './pages/PizzaDetail.jsx'

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pizza/:id" element={<PizzaDetail />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  )
}
