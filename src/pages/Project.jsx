import React, { useEffect } from 'react'

const Project = ({ setProgress }) => {


  useEffect(() => {
    setProgress(10);
    setTimeout(() => {
      setProgress(100);
    }, 100);
  }, [])


  return (
    <div>
      Projects
    </div>
  )
}

export default Project