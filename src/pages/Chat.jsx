import { useState } from 'react'
import { toast } from 'react-toastify';

const Chat = () => {

  const [message, setMessage] = useState(null);
  const chatMessage = () => {
    const message = document.getElementById('user-prompt');
    toast.error(message)
  }

  return (
    <div className='h-full rounded-md p-7 chat-area'>
      <div className="p-2 overflow-auto chat">
        <div className='flex items-center p-5 mb-3 rounded-md chat-user'>
          <img
            src="https://www.gstatic.com/lamda/images/sparkle_resting_v2_darkmode_2bdb7df2724e450073ede.gif"
            alt="icon" />
          <p className='ml-6'>Hello there! How can I help you today?</p>
        </div>
        <div className='flex items-center p-5 mb-3 rounded-md chat-user'>
          <img
            src="https://www.gstatic.com/lamda/images/sparkle_resting_v2_darkmode_2bdb7df2724e450073ede.gif"
            alt="icon" />
          <p className='ml-6'>
            Hello mohmmadHello mohmmadHello mohmmadHello mohmmadHello
            mohmmadHello mohmmadHello mohmmadHello mohmmadHello mohmmadHello
            mohmmadHello mohmmadHello mohmmadjsjjdjsjsdjsdj
            {/* Hello mohmmadHello mohmmadHello mohmmadHello mohmmadHello
                mohmmadHello mohmmadHello mohmmadHello mohmmadHello mohmmadHello
                mohmmadHello mohmmadHello mohmmadjsjjdjsjsdjsdj */}
          </p>
        </div>
      </div>
      <div className="my-4 items-e nd input-user">
        <div className='flex send-area'>
          <input type="text"
            className='w-full px-5 py-4 leading-tight border shadow appearance-none rounded-3xl focus:outline-none'
            name="input" id="user-prompt" placeholder='Enter a prompt here' />
          <span
            className='flex items-center justify-center mx-2 leading-tight'>
            <button
              className='p-4 my-auto hover:bg-slate-800 send rounded-3xl' onClick={() => chatMessage()}>
              <i className="fa fa-paper-plane" aria-hidden="true"></i>
            </button>
          </span>
        </div>
      </div>
    </div>
  )
}
export default Chat
