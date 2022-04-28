import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './Components/Pages/Home';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    {/* <React.StrictMode> */}
      <Routes>
        <Route path="*" element={<App />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    
    {/* </React.StrictMode>   */}
  </BrowserRouter>
  
);
