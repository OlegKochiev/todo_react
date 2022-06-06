import ListItem from "./ListItem";

function List(props) {
  // let list = props.tasksList.map((taskName, index) => (
  //   <ListItem
  //     key={index}
  //     taskName={taskName}
  //     taskIndex={index}
  //   />
  // ));

  return (
    <ul className="to-do__list list"> {
      props.tasksList.map((taskName, index) => (
        <ListItem
          key={index}
          taskName={taskName}
          taskIndex={index}
        />
      ))
    } </ul>
  )
}

export default List; 