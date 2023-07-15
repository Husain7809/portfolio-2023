import React from 'react'
import { skillData } from '../utils/data';
import { ShowToast } from '../utils/Toast';

const Skill = () => {

  const showPopup = (name) => {
    ShowToast({ text: name });
  }

  return (
    <div className='grid text-center lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-2 mt-28 skill_div'>
      {
        skillData.map((item, index) => {
          return (
            <>
              <div className="uppercase tag" onClick={() => showPopup(item.name.toUpperCase())}>
                <p>{item.name}</p>
              </div>
            </>
          )
        })
      }
    </div>
  )
}

export default Skill