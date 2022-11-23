import React from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Form from '../Components/Form/Form';
import Home from '../Components/Home';


import Layout from '../layout/layout'

const AppRoutes = () => {
  return (
    <Router>
        <Routes>
            <Route path='/' element={<Layout/>}>
                <Route index element={<Home/>}/>
                <Route path='/Form' element={<Form/>}  />
            </Route>
        </Routes>
    </Router>
  )
}

export default AppRoutes