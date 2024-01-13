import Task from "./Task";

function TaskList(props) {
  const tasks = props.tasks;
  const taskItems = tasks.map((task) => <Task key={task.id} task={task} />);
  return (
    <div>
      <h2>Tasks</h2>
      {taskItems}
    </div>
  );
}

export default TaskList;
