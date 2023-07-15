import React, { useEffect, useState, lazy, Suspense } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
const NavBar = lazy(() => import('./pages/NavBar'));
const Music = lazy(() => import('./pages/Music'));
const ContactUs = lazy(() => import('./pages/ContactUs'));
const Blog = lazy(() => import('./pages/Blog'));
const Skill = lazy(() => import('./pages/Skill'));
const Project = lazy(() => import('./pages/Project'));
const Profile = lazy(() => import('./pages/Profile'));
const Chat = lazy(() => import('./pages/Chat'));
import Loader from "./pages/Loader";

function App() {

  return (
    <Router>
      <Music />
      <div className="grid grid-cols-4">
        <div className="">
          <NavBar />
        </div>
        <div className="col-span-3">
          <Suspense fallback={<Loader />}>
            <Routes>
              <Route path="/" element={<Profile />} />
              <Route path="/skill" element={<Skill />} />
              <Route path="/projects" element={<Project />} />
              <Route path="/my-blog" element={<Blog />} />
              <Route path="/chat" element={<Chat />} />
              <Route path="/contact-me" element={<ContactUs />} />
            </Routes>
          </Suspense>
        </div>
      </div>
      <ToastContainer draggable={false} />
    </Router >
  );
}

export default App;
