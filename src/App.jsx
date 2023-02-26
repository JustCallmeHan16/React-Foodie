import React from 'react'
import { Route, Routes } from 'react-router-dom'
import './index.css'
import Meal from './Pages/Meal'
import Details from './Pages/Details'
import Navbar from './Components/Navbar'

const App = () => {

    return (
      <div className='continer w-10/12 mx-auto'>
        <Navbar></Navbar>
        <Routes>
          <Route path='/' element={<Meal></Meal>}></Route>
          <Route path='/details/:id' element={<Details></Details>}></Route>
        </Routes>
      </div>
    )

}

export default App