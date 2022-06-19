import { useState } from 'react';
import { useDispatch } from 'react-redux'
import { delTask } from '../store/tasksSlice';


function ListItem({ id, task, status }) {

  const dispatch = useDispatch();
  const [taskStatus, setTaskStatus] = useState(status);

  const handleDeleteTask = function () {
    dispatch(
      delTask({
        id
      })
    );
  }

  const handleChangeTaskStatus = () => {

  }

  return (
    <li
      className="list__item"
      id={id}>

      <label
        className="to-do__checkbox-wrapper">

        <input
          type="checkbox"
          checked={status}
          className="to-do__task-checkbox">
        </input>

        <span></span>
      </label>

      <p
        className="to-do__task-desc">
        {task}
      </p>

      <button
        type="button"
        className="to-do__del-btn"
        onClick={handleDeleteTask}>
      </button>
    </li>
  )
}

export default ListItem; 