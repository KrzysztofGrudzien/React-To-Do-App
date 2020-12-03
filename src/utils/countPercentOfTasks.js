const countPercentOfTasks = (completed, tasks) => {
  const completedTask = parseInt(completed);
  const allTasks = parseInt(tasks);
  return `${Math.round((completedTask / allTasks) * 100)}%`;
};

export default countPercentOfTasks;
