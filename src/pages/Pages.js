import React from 'react'
import Home from './Home'
import {Route,Routes, useLocation} from "react-router-dom";
import Cuisine from './Cuisine';
import Searched from './Searched';
import Recipe from './Recipe';
import {AnimatePresence} from 'framer-motion';

function Pages() {
  const location = useLocation();

  return (
    <AnimatePresence exitBeforeEnter>
      <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/cuisine/:type" element={<Cuisine></Cuisine>}></Route>
          <Route path="/searched/:search" element={<Searched></Searched>}></Route>
          <Route path="/recipe/:name" element={<Recipe></Recipe>}></Route>
      </Routes>
    </AnimatePresence>
  )
}

export default Pages
