import {
  useState
} from "react";

function Form({ handleSubmit, todoItemName }) {
  const [taskName, setTaskName] = useState('');

  const handleSubmitForm = function (e) {
    e.preventDefault();
    handleSubmit(taskName);
    handleInputClear();
  }

  const handleInputChange = function (e) {
    const taskName = e.target.value;
    setTaskName(taskName);
  }

  const handleInputClear = function (params) {
    setTaskName('');
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
          value={taskName}>
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