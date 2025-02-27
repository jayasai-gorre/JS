import { Box, Button } from '@chakra-ui/react'
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import CreatePage from './pages/CreatePage'
import Navbar from './components/other/Navbar'

const App = () => {
  return (
    <Box minH={"100vh"}>
      {/* navbar */}
      <Navbar/>
      <Routes>
        <Route path="/" element={<HomePage/>}></Route>
        <Route path="/create" element={<CreatePage/>}></Route>
      </Routes>
    </Box>
  )
}

export default App