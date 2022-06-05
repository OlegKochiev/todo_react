import { useState } from "react";
import ListItem from "./ListItem";
import {
  tasksListHigh
} from "./const";


function List(props) {
  return (
    <ul className="to-do__list" id="highPriorityList">
    </ul>
  )
}

export default List;