import './App.css'
import { Routes, Route } from 'react-router-dom'
import { Home } from './components/Home/Home'
import { NotFound} from './components/NotFound/NotFound.jsx'

function App(cart) {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='*' element={<NotFound/>}></Route>
      </Routes>
    </>
  )
}

export default App
