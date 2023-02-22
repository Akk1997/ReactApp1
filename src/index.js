import React from 'react';
import { Route, Routes, BrowserRouter} from "react-router-dom";
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
window.onload = function (){
    localStorage.clear();
}
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/*" element={<App />} />
    </Routes>
  </BrowserRouter>
  </React.StrictMode>
);


