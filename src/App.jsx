import { useState } from 'react'
import { BrowserRouter as Router,  Route, Routes } from 'react-router-dom'
import Header from './components/header'
import Footer from './components/footer'
import { Container } from "react-bootstrap";
import './index.css'
import HomeScreen from './screens/Screens'
import ProductScreen from './screens/productScreen'

function App() {
  return (
    <div className="app">

    <Router>

    
      <Header/>
      <main>
      <Container>
        
        <Routes>
        <Route path='/' element={<HomeScreen/>} exact/>
        <Route path='/product/:id' element={<ProductScreen/>}  /> 
        </Routes>
       </Container>
      </main>
      
       <Footer/>
    </Router>
       </div> 
  )
}

export default App
