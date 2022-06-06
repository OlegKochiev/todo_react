
function ListItem(props) {



  const handleDeleteButton = function (e) {
    const taskID = props.taskID
    props.handleDeleteButton(taskID);
  }


  return (
    <li
      className="list__item"
      id={props.taskIndex}>

      <label
        className="to-do__checkbox-wrapper">

        <input
          type="checkbox"
          className="to-do__task-checkbox">
        </input>

        <span></span>
      </label>

      <p
        className="to-do__task-desc">
        {props.taskName}
      </p>

      <button
        type="button"
        className="to-do__del-btn"
        onClick={handleDeleteButton}>
      </button>
    </li>
  )
}

export default ListItem; 