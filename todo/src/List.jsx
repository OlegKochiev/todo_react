import ListItem from "./ListItem";

function List({ tasksList, handleDeleteButton }) {
  return (
    <ul className="to-do__list list"> {
      tasksList.map((taskName, index) => (
        <ListItem
          key={index}
          taskID={index}
          taskName={taskName}
          handleDeleteButton={handleDeleteButton}
        />
      ))
    } </ul>
  )
}

export default List; 