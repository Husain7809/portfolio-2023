import './App.css'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './global/style.css';
import NavBar from "./pages/NavBar";
import Music from './pages/Music';
import ContactUs from './pages/ContactUs';
import Blog from './pages/Blog';
import Skill from './pages/Skill';
import Project from './pages/Project';
import Profile from './pages/Profile';
import Chat from './pages/Chat';



function App() {
  return (
    <BrowserRouter>
      <Music />
      <div className="grid grid-cols-4">
        <div className="">
          <NavBar />
        </div>
        <div className="col-span-3">
          <Routes>
            <Route path='/' element={<Profile />} />
            <Route path='/skill' element={<Skill />} />
            <Route path='/projects' element={<Project />} />
            <Route path='/my-blog' element={<Blog />} />
            <Route path='/chat' element={<Chat />} />
            <Route path='/contact-me' element={<ContactUs />} />
          </Routes>
        </div>
      </div>
      <ToastContainer draggable={false} />
    </BrowserRouter >
  )
}

export default App
