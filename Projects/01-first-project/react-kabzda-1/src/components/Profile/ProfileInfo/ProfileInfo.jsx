import React from "react";
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
  return (
    <div>
      <div>
        <img src="https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" className={s.img}/>
      </div>
      <div className={s.descriptionBlock}>ava</div>
    </div>
  );
};

export default ProfileInfo;
