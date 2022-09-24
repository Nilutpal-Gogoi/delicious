import React from 'react'
import Home from './Home'
import {Route,Routes, BrowserRouter} from "react-router-dom";
import Cuisine from './Cuisine';
import Searched from './Searched';

function Pages() {
  return (
    <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/cuisine/:type" element={<Cuisine></Cuisine>}></Route>
        <Route path="/searched/:search" element={<Searched></Searched>}></Route>
    </Routes>
  )
}

export default Pages
