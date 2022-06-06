import ListItem from "./ListItem";

function List(props) {
  return (
    <ul className="to-do__list list"> {
      props.tasksList.map((taskName, index) => (
        <ListItem
          key={index}
          taskID={index}
          taskName={taskName}
          handleDeleteButton={props.handleDeleteButton}
        />
      ))
    } </ul>
  )
}

export default List; 