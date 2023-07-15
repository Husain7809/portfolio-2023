import { useEffect } from 'react';
import { ShowToast } from '../utils/Toast';
import React from 'react';

const Music = () => {

  useEffect(() => {
    return () => {
      const musicObj = "https://open.spotify.com/embed/playlist/6NfjWGfT7xHRraFUte9R65?utm_source=generator&theme=0;"
      console.log(musicObj);

      ShowToast({ text: 'Click spacebar to ' })
    }

  }, [])

  return (

    <div className="container flex justify-center mb-10">
      <iframe
        id="spotify-iframe"
        className='flex'
        title="Husain"
        src="https://open.spotify.com/embed/playlist/6NfjWGfT7xHRraFUte9R65?utm_source=generator&theme=0&autoplay=true"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture;"
        loading="lazy"
      ></iframe>
    </div>
  )
}

export default Music
