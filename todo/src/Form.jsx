function Form(props) {

  const handleSubmit = function (e) {
    props.handleSubmit();
    e.preventDefault();
  }

  const handleInputChange = function (e) {
    const taskName = e.target.value;
    props.handleChange(taskName);
  }

  return (
    <form
      className="to-do__form-high form"
      action="#"
      onSubmit={handleSubmit}>

      <label
        className="form__title"
        htmlFor="inputHigh">
        {props.todoItemName}
      </label>

      <div
        className="form__inner"
        id="highPriority">

        <input
          className="form__input"
          id="inputHigh"
          type="text"
          onChange={handleInputChange}
          placeholder="Добавить важных дел">
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