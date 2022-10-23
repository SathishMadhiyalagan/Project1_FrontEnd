import './App.css';
import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import Header from './components/Header';
import SigninPage from './pages/SigninPage';
import { PrivateRoute } from './utils/PrivateRoute';
import {AuthProvider} from './context/AuthContext'



function App() {
  return (
    <BrowserRouter>
    <AuthProvider>
    <Header />
    
    <Routes>
        

          <Route path="/" element={<PrivateRoute> <HomePage /></PrivateRoute>} exact />

          <Route path="/login" element={<LoginPage />} />

          <Route path="/signup" element={<SigninPage />} />

     
    </Routes>
    </AuthProvider>
  </BrowserRouter>
  );
}

export default App;
