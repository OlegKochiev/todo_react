import { useState } from "react";

function ListItem(props) {
  return (
    <li key={props.key} className="to-do__item" id="1">
      <label className="to-do__checkbox-wrapper">
        <input type="checkbox" className="to-do__task-checkbox"></input>
        <span></span>
      </label>
      <p className="to-do__task-desc">sws</p>
      <button type="button" className="to-do__del-btn"></button>
    </li>
  )
}

export default ListItem;