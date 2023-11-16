import { Route, Routes } from 'react-router-dom'
import './App.scss'
import Home from './views/Home'
import Contacts from './views/Contacts'

function App() {
  
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contacts' element={<Contacts />} />
      </Routes>
    </>
  )
}

export default App
