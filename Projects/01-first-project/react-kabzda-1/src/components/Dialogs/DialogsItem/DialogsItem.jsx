import React from "react";
import s from "./../Dialogs.module.css";
import { NavLink } from "react-router-dom";


const DialogsItem = props => {
  return (
    <div className={`${s.dialog} ${s.active}`}>
      <NavLink to={"/dialogs/" + props.id} activeClassName={s.activeLink}>
        {props.name}
      </NavLink>
    </div>
  );
};

export default DialogsItem;
