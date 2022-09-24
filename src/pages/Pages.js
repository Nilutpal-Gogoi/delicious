import React from 'react'
import Home from './Home'
import {Route,Routes, BrowserRouter} from "react-router-dom";
import Cuisine from './Cuisine';

function Pages() {
  return (
    <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/cuisine/:type" element={<Cuisine></Cuisine>}></Route>
    </Routes>
  )
}

export default Pages
