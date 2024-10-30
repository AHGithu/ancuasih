import React from "react";
import Home from './pages/Home/Home'
import {Routes, Route } from 'react-router-dom'
import Login from './pages/Login/Login'
import Player from './pages/Player/Player'
import DetailsModal from './components/DetailsModal/DetailsModal'
import { ModalProvider } from './context/ModalContext';

const App = () =>{
  return(
    <ModalProvider>
      <div>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/player/:trailer' element={<Player/>}/>
          <Route path='/details/:id' element={<DetailsModal/>}/>
        </Routes>
      </div>
    </ModalProvider>
  )
}

export default App