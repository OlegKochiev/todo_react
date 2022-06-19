class TasksList {
  constructor() {
    this.list = [];
  }

  addTask(taskName) {
    this.list.push(taskName);
  }

  delTask(taskID) {
    this.list = this.list.slice(taskID);
  }
}

export default TasksList;