import React from 'react'
import ScrollToTop from './components/ScrollToTop'
import MainLayout from './layouts/MainLayout'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Industries from './pages/Industries'
import Pentakhul from './pages/Pentakhul'

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/pentakhul" element={<Pentakhul />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App