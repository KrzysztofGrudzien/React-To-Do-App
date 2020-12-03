const countTasks = (type, allTasks) => {
  if (type === "completed") {
    return allTasks.filter(task => task.completed).length;
  } else if (type === "uncompleted") {
    return allTasks.filter(task => !task.completed).length;
  } else {
    return allTasks.length;
  }
};

export default countTasks;
