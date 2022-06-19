import ListItem from "./ListItem";
import { useSelector } from 'react-redux';


function List({ priority }) {
  const tasksList = useSelector(store => store.tasks);
  const tasksListFiltered = tasksList.filter((task) => {
    return task.priority === priority
  });

  return (
    <ul className="to-do__list list"> {
      tasksListFiltered.map((task, index) => (
        <ListItem
          key={index}
          {...task}
        />
      ))
    } </ul>
  )
}

export default List; 