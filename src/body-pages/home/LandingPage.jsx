import { FaLinkedin, FaTwitter, FaGithub } from '../../../node_modules/react-icons/fa6/index.esm';

const LandingPage = () => {
  return (
    <div className='mt-5 about'>
      < div className="text-4xl title" >
        <h1>Mohammad Husain</h1>
      </div >
      <div className="mt-2 text-lg div">
        <p>Hello!  I'm Mohammed Hussain, a dedicated software developer specializing in Node.js. I have a strong background in server-side development.</p>
      </div>
      <div className="flex items-center mt-7 w-fit h-fit social-profile">
        <div className="profile-img">
          <img src="../../../public/assets/social-profile.jpg" style={{ width: '15rem', height: '15rem', borderRadius: '50%' }} alt="social" />
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
      <div className="mt-3 fav-msg">
        <p>I love creating webapps using javascript! </p>
      </div>
    </div >
  )
}

export default LandingPage
