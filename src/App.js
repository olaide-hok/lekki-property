import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Footer from './Components/Layouts/Footer';
import Header from './Components/Layouts/Header';
import AddProperty from './Components/Pages/AddProperty';
import Home from './Components/Pages/Home';
import ListProperty from './Components/Pages/ListProperty';

function App() {
  return (
    <div className="">
  
        <Header />
        <Routes>
          <Route path='/' element={<Home />}  />
          <Route path='/addproperty' element={<AddProperty />}  />
          <Route path='/listproperty' element={<ListProperty />}  />

        </Routes>
        <Footer />

        
        
     

      
      
    </div>
  );
}

export default App;
