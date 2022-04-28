import React from 'react';
import Main from './Main';
import ThankU from './ThankU';
import Oops from './Oops';
import { Routes, Route } from "react-router-dom";


export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Main/>} />
        <Route path="/thanks" element={<ThankU/>} />
        <Route path="/oops" element={<Oops/>} />
      </Routes>
    </div>
  );
}
