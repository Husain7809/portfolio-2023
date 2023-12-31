import { useEffect } from 'react';

const ContactUs = ({ setProgress }) => {

  useEffect(() => {
    setProgress(10);
    setTimeout(() => {
      setProgress(100);
    }, 100);
  }, [])

  return (
    <div className="mt-10 contact-us">
      <div className="m-auto conatct-div lg:w-full w-fit">
        <h1 className="text-4xl text-center lg:text-left">Contact</h1>

        <a href="mailto:varaliyamahammadhusain@gmail.com" className="mt-2" target="_blank" rel="noreferrer">
          <div className="text-center mt-7 email hover:bg-gray-700">
            <h3>Send me an email!</h3>
            varaliyamahammadhusain@gmail.com
          </div>
        </a>

      </div>
      <div className="m-auto support mt-7 lg:w-full w-fit ">
        <h1 className="text-4xl text-center lg:text-left">Support</h1>
        <a href="https://www.buymeacoffee.com/mhusain" target="_blank" rel="noreferrer">
          <div className="text-center conffee mt-7 hover:bg-gray-700">
            Buy me a coffee!
          </div>
        </a>
        <a href="#" target="_blank" rel="noreferrer">
          <div className="text-center stripe mt-7 hover:bg-gray-700">
            Support me through stripe!
          </div>
        </a>
      </div>
    </div >
  )
}

export default ContactUs
