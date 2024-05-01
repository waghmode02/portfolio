import React from 'react'
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Admin from "../admin/Admin.jsx"
const index = () => {
  return (
   <Router>
    <Routes>
        <Route path='/admin' element={<Admin/>}/>
    </Routes>
   </Router>
  )
}

export default index