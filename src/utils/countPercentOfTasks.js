const countPercentOfTasks = (completed, tasks) => {
  const completedTask = parseInt(completed);
  const allTasks = parseInt(tasks);
  let percent = Math.round((completedTask / allTasks) * 100);

  if (completedTask < 1) {
    return `${0}%`;
  }
  return `${percent}%`;
};

export default countPercentOfTasks;
