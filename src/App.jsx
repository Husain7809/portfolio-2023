import React, { useEffect, useState, lazy, Suspense } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
const NavBar = lazy(() => import('./pages/NavBar'));
const Music = lazy(() => import('./pages/Music'));
const ContactUs = lazy(() => import('./pages/ContactUs'));
const Skill = lazy(() => import('./pages/Skill'));
const Project = lazy(() => import('./pages/Project'));
const Profile = lazy(() => import('./pages/Profile'));
const Chat = lazy(() => import('./pages/Chat'));
import Loader from './pages/Loader';
import LoadingBar from 'react-top-loading-bar';


const App = () => {
  const [progress, setProgress] = useState(0)

  return (
    <BrowserRouter>
      <>
        <div className='text-center not_support'>
          <img src="/images/not_support.jpg" className='flex items-center m-auto' alt="Screen not support" />
          <p className='mt-4'>Please rotate your device</p>
        </div>
        <div className='body_section'>
          <div className="grid grid-cols-4">
            <div className="nav_section">
              <NavBar />
            </div>
            <div className="col-span-3">
              <LoadingBar color='gold' height={3} transitionTime={300} loaderSpeed={500} waitingTime={300} progress={progress} onLoaderFinished={() => setProgress(0)} />
              <Suspense fallback={<Loader />}>
                <Music />
                <Routes>
                  <Route path="/" element={<Profile setProgress={setProgress} />} />
                  <Route path="/skill" element={<Skill setProgress={setProgress} />} />
                  <Route path="/projects" element={<Project setProgress={setProgress} />} />
                  <Route path="/chat" element={<Chat setProgress={setProgress} />} />
                  <Route path="/contact-me" element={<ContactUs setProgress={setProgress} />} />
                </Routes>
              </Suspense>
            </div>
          </div>
        </div>
      </>
      <ToastContainer draggable={false} />
    </BrowserRouter>
  );
};

export default App;
