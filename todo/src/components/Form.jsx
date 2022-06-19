import { useState } from "react";
import { useDispatch } from 'react-redux';
import { addTask } from "../store/tasksSlice";


function Form({ todoItemName, taskPriority }) {
  const [task, setTask] = useState('');
  const dispatch = useDispatch();

  const handleSubmitForm = function (e) {
    e.preventDefault();
    dispatch(
      addTask({
        task,
        priority: taskPriority
      })
    );
    handleInputClear();
  }

  const handleInputChange = function (e) {
    const task = e.target.value;
    setTask(task);
  }

  const handleInputClear = function (params) {
    setTask('');
  }

  return (
    <form
      className="to-do__form-high form"
      action="#"
      onSubmit={handleSubmitForm}>

      <label
        className="form__title"
        htmlFor="inputHigh">
        {todoItemName}
      </label>

      <div
        className="form__inner"
        id="highPriority">

        <input
          className="form__input"
          id="inputHigh"
          type="text"
          onChange={handleInputChange}
          placeholder="Добавить важных дел"
          value={task}>
        </input>

        <button
          className="form__add-btn"
          id="btnHigh"
          type="submit">
        </button>
      </div>
    </form>
  )
}

export default Form;