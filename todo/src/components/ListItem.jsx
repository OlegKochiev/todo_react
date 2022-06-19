import { useState } from 'react';
import { useDispatch } from 'react-redux'
import { changeTaskStatus, delTask } from '../store/tasksSlice';


function ListItem({ id, task, completed }) {

  const dispatch = useDispatch();
  const [taskStatus, setTaskStatus] = useState(completed);

  const handleDeleteTask = function () {
    dispatch(
      delTask({
        id
      })
    );
  }

  const handleChangeTaskStatus = (e) => {
    const isChecked = e.target.checked;
    dispatch(
      changeTaskStatus({
        id
      })
    );
    setTaskStatus(!taskStatus);
  }

  return (
    <li
      className="list__item"
      id={id}>

      <label
        className="to-do__checkbox-wrapper">

        <input
          type="checkbox"
          checked={taskStatus}
          onChange={handleChangeTaskStatus}
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