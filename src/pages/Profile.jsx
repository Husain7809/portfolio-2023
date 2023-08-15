import { useEffect } from 'react';
import { FaLinkedin, FaTwitter, FaGithub } from 'react-icons/fa';

const Profile = ({ setProgress }) => {

  useEffect(() => {
    setProgress(10);
    setTimeout(() => {
      setProgress(100);
    }, 100);
  }, [])

  return (
    <div className='mt-5 about'>
      <div className="text-4xl lg:text-left sm:text-center title" >
        <h1>Mohammad Husain</h1>
      </div >
      <div className="mt-2 ml-5 text-lg lg:ml-auto lg:text-left sm:text-center">
        <p>👋 Hello! I'm Mohammed Husain, a dedicated software developer specializing in Node.js. I have a strong background in server-side development.</p>
      </div>
      <div className="flex items-center pt-10 text-center lg:ml-0 md:m-auto w-fit h-fit social-profile">
        <div className="profile-img">

          <img src="../../dist/assets/social-profile.jpg" style={{ width: '15rem', height: '15rem', borderRadius: '50%' }} alt="social" />
        </div>
        <div className="items-center ml-10 align-middle social-links" style={{ color: 'gray' }}>
          <div className="mb-3 text-xl linkedin-link">
            <a href="https://www.linkedin.com/in/mohammad-husain-b23167206/" target="_blank" className="flex items-center" rel="noreferrer"><FaLinkedin />&nbsp;LinkedIn</a>
          </div>
          <div className="mb-3 text-xl github-link">
            <a href='https://github.com/Husain7809' target="_blank" className="flex items-center" rel="noreferrer"><FaGithub />&nbsp;Open Github</a>
          </div>
          <div className="mb-3 text-xl twitter-link">
            <a href='#' target="_blank" className="flex items-center"><FaTwitter />&nbsp;Open Twitter</a>
          </div>
        </div>
      </div>
      <div className="mt-3 lg:text-left sm:text-center marker: fav-msg">
        <p>I love creating webapps using javascript! </p>
      </div>
    </div >
  )
}

export default Profile
