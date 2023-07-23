import React, { useEffect } from 'react'
import { projectData } from '../utils/data';

const Project = ({ setProgress }) => {


  useEffect(() => {
    setProgress(10);
    setTimeout(() => {
      setProgress(100);
    }, 100);
  }, [])


  return (
    <section className='m-auto mt-4 ml-10 overflow-auto lg:ml-auto' style={{ maxHeight: '50rem' }}>
      <h1 className='mb-4 text-4xl text-left md:text-center'>Projects</h1>
      <div className='grid w-full h-full grid-cols-1 mx-auto lg:grid-cols-2 md:w-fit'>
        {
          projectData.map((item, index) => {
            return (
              <div className='border-4 border-gray-500 shadow-lg project_section'>
                {item.image ?
                  <div className="image">
                    <img src={`../../public/assets/${item.image}`} alt="project_image" />
                  </div>
                  : ""
                }
                <div className="p-4 capitalize project_body">
                  <h2 className='title'><span>Project Title: </span><span className='text-blue-700'>{item.title}</span></h2>
                  <p className='role'>Project Role: <span className='text-blue-700'>{item.role}</span></p>
                  <p className='tech'>Project Technology: <span className='text-blue-700'>{item.technology}</span></p>
                  <p className='domain'>
                    Project Domain: <a href={item.domain} target='_blank'><span className='text-blue-700 hover:underline'>{item.title}</span></a>
                  </p>
                  <p className='git'>
                    Project Git Link: <a href={item.git_link} target='_blank'><span className='text-blue-700 hover:underline'>{item.title}</span></a>
                  </p>
                </div>
              </div>
            )
          })
        }

      </div>
    </section>
  )
}

export default Project