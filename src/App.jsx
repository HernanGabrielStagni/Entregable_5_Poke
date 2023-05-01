import { Route, Routes } from 'react-router-dom'
import './components/0_Styles/App.css'
import Home from './pages/Home'
import Pokedex from './pages/Pokedex'
import ProtectedRoutes from './pages/ProtectedRoutes'


function App() {

  return (
    <div className='app'>
      <Routes>
         <Route path='/' element={<Home />}/>
         <Route element={<ProtectedRoutes />}>
            <Route path='/pokedex' element={<Pokedex />} />
         </Route>
      </Routes>
    </div>
  )
}

export default App
