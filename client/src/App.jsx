import {  Route, Routes ,Navigate } from "react-router-dom"
import Profile from './pages/Profile';
import './index.css'
import Auth from "./pages/auth";
import { ToastContainer  } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import TemplateOne from "./templates/template_one";
import TemplateTwo from "./templates/template_two";
import TemplateThree from "./templates/template_three";
import Home from "./pages/Home";
import toastConfig from "./config/toastConfig";
import NotFound from "./pages/NotFound";
import Templates from "./pages/Templates";

function App() {
  
  const config = toastConfig(1000 > window.innerWidth);


  return (
    <main className={`w-full h-screen overflow-y-auto `}>

    <Routes>
      <Route path="/"  element={<Home />} />
      <Route path="/auth/:mood"  element={<Auth />} />
      <Route path="/profile"  element={<Profile />} />
      <Route path="/templates"  element={<Templates />} />
      <Route path="/temp/one/:userId" element={<TemplateOne />} />
      <Route path="/temp/two/:userId" element={<TemplateTwo />} />
      <Route path="/temp/three/:userId" element={<TemplateThree />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    
    <ToastContainer
    {...config}
     />
    </main>
  )
}

export default App
