import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import About from './pages/About'
import FurnitureCategory from './pages/subPages/Furniture'
import Verify from './pages/Verify'

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
          <Route path='/furniture' element={<FurnitureCategory />} />
        <Route path='/about' element={<About />} />
        <Route path='/verify' element={<Verify />} />
      </Routes>
    </>
  )
}

export default App
