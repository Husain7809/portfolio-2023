
const ContactUs = () => {
  return (
    <div className="mt-10 contact-us">
      <div className="conatct-div">
        <h1 className="text-4xl">Contact</h1>
        <div className="text-center mt-7 email">
          <h3>Send me an email!</h3>
          <a href="mailto:varaliyamahammadhusain@gmail.com" className="mt-2" target="_blank" rel="noreferrer">varaliyamahammadhusain@gmail.com</a>
        </div>
      </div>
      <div className="support mt-7">
        <h1 className="text-4xl">Support</h1>
        <a href="https://www.buymeacoffee.com/mhusain" target="_blank" rel="noreferrer">
          <div className="text-center conffee mt-7 ">
            Buy me a coffee!
          </div>
        </a>
        <a href="/support-stripe" target="_blank" rel="noreferrer">
          <div className="text-center stripe mt-7 ">
            Support me through stripe!
          </div>
        </a>
      </div>
    </div>
  )
}

export default ContactUs
