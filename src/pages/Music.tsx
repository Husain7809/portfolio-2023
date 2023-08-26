import { useEffect } from 'react';
import { ShowToast } from '../utils/Toast';
import React from 'react';

const Music = () => {

  useEffect(() => {
    return () => {
      const musicObj = "https://open.spotify.com/embed/playlist/6NfjWGfT7xHRraFUte9R65?utm_source=generator&theme=0;"
      ShowToast({ text: 'Click spacebar to open music' })
    }

  }, [])

  window.addEventListener('keypress', (e) => {
    if (e.which === 32) {
    }
  })

  return (

    <div className="container flex justify-center">
      <iframe
        id="spotify-iframe"
        className='flex'
        title="Husain"
        src="https://embed-standalone.spotify.com/embed/playlist/6NfjWGfT7xHRraFUte9R65"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture;"
        loading="lazy"
      ></iframe>
    </div>
  )
}

export default Music
