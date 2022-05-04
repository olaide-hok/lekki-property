import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Footer from './Components/Layouts/Footer';
import Header from './Components/Layouts/Header';
import AddProperty from './Components/Pages/AddProperty';
import Home from './Components/Pages/Home';
import ListProperty from './Components/Pages/ListProperty';
import PropertyPage from './Components/Pages/PropertyPage';
import Success from './Components/Pages/Success';
import UpdateProperty from './Components/Pages/UpdateProperty';

function App() {
  return (
    <div className="">
  
        <Header />
        <Routes>
          <Route path='/' element={<Home />}  />
          <Route path='addproperty' element={<AddProperty />}  />
          <Route path='listproperty' element={<ListProperty />}/>
          <Route path='listproperty/:id' element={<PropertyPage />}  />
          <Route path='listproperty/:id/updateproperty/:id' element={<UpdateProperty />}  />

          <Route path='success' element={<Success />}  />


        </Routes>
        <Footer />

        
        
     

      
      
    </div>
  );
}

export default App;
