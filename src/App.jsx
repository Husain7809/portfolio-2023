import './App.css'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import NavBar from './navBar-left/NavBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LandingPage from './body-pages/home/LandingPage';
import Skill from './body-pages/skill/Skill';
import Projects from './body-pages/project/Projects';
import Blog from './body-pages/blog/Blog';
import Contact from './body-pages/contact-us/Contact';
import Chat from './body-pages/chat/Chat';
import Header from './header-music/Header';

function App() {

  return (
    <BrowserRouter>
      <Header />
      <div className="grid grid-cols-4">
        <div className="">
          <NavBar />
        </div>
        <div className="col-span-3">
          <Routes>
            <Route path='/' element={<LandingPage />} />
            <Route path='/skill' element={<Skill />} />
            <Route path='/projects' element={<Projects />} />
            <Route path='/my-blog' element={<Blog />} />
            <Route path='/chat' element={<Chat />} />
            <Route path='/contact-me' element={<Contact />} />
          </Routes>
        </div>
      </div>
      <ToastContainer draggable={false} />
    </BrowserRouter >
  )
}

export default App
