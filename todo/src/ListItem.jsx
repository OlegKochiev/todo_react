function ListItem(props) {
  return (
    <li className="list__item" id={props.index}>
      <label className="to-do__checkbox-wrapper">
        <input type="checkbox" className="to-do__task-checkbox"></input>
        <span></span>
      </label>
      <p className="to-do__task-desc">{props.taskName}</p>
      <button type="button" className="to-do__del-btn"></button>
    </li>
  )
}

export default ListItem;