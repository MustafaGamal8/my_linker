import {  Route, Routes  } from "react-router-dom"
import Profile from './pages/Profile';
import { ToastContainer  } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Home from "./pages/Home";
import Auth from "./pages/auth";
import NotFound from "./pages/NotFound";
import Templates from "./pages/Templates";
import Temp from "./pages/temp";
import toastConfig from "./config/toastConfig";
import "./style.css"
import { useEffect } from "react";
if (!window.location.pathname.includes("///")) import('./index.css') 

function App() {

  const config = toastConfig(1000 > window.innerWidth);


  return (
    <main className={`w-full h-screen overflow-y-auto `}>

    <Routes>
      <Route path="/"  element={<Home />} />
      <Route path="/auth/:mood"  element={<Auth />} />
      <Route path="/profile"  element={<Profile />} />
      <Route path="/templates"  element={<Templates />} />

      <Route path="/temp/:tempName/:userId" element={<Temp />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    
    <ToastContainer
    {...config}
     />
    </main>
  )
}

export default App
