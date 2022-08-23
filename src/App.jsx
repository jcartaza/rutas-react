
import {Routes, Route} from "react-router-dom"
import React from 'react'
import AboutUs from './pages/AboutUs'
import Home from './pages/Home'
import Products from './pages/Products'
import Layout from "./components/Layout"
import SearchResults from "./pages/SearchResults"
import NotFound from "./pages/NotFound"

function App() {
 

  return (
     
    
     <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home />}/>
          <Route path="/AboutUs" element={<AboutUs/>}/>
          <Route path="/Products/*" element={<Products />}/>
          <Route path="search" element={<SearchResults/>}/>
        </Route>
          <Route path="*" element={<NotFound/>}/>
     </Routes>
     
  )
}

export default App
