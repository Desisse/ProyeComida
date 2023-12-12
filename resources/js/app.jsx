import './bootstrap';
import React from 'react';
import ReactDOM from "react-dom/client";
import Menu from "./Components/Menu";
import Main from './Components/Main';
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from './Components/AuthContext';

ReactDOM.createRoot(document.getElementById('app')).render(
    <BrowserRouter>
      <AuthProvider>
        <Main />
      </AuthProvider>
    </BrowserRouter>
  );