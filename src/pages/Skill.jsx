import React, { useEffect } from 'react';
import { skillData } from '../utils/data';
import { ShowToast } from '../utils/Toast';

const Skill = ({ setProgress }) => {

  useEffect(() => {
    setProgress(10);
    setTimeout(() => {
      setProgress(100);
    }, 100);
  }, [])

  const showPopup = (name) => {
    ShowToast({ text: name });
  }

  return (
    <div className="grid overflow-auto text-center ml-14 lg:ml-auto lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-2 mt-28 skill_div">
      {skillData.map((item, index) => {
        return (
          <div
            className="uppercase tag"
            key={index}
            onClick={() => showPopup(item.name.toUpperCase())}
          >
            <p>{item.name}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Skill;
