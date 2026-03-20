import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import About from './pages/About'
import FurnitureCategory from './pages/subPages/Furniture'
import Verify from './pages/Verify'
import ReturnHome from './pages/ReturnHome'
import NotFound from './pages/NotFound'
import GorillaCouch from './pages/subPages/GorillaCouch'
import Reviews from './pages/subPages/Reviews'

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
          <Route path='/furniture' element={<FurnitureCategory />} />
            <Route path='/furniture/c1' element={<GorillaCouch />}/>
              <Route path='/furniture/c1/reviews' element={<Reviews />}/>
        <Route path='/about' element={<About />} />
        <Route path='/verify' element={<Verify />} />
        <Route path='/return' element={<ReturnHome />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
