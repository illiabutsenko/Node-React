function Task(props) {
  return (
    <div>
      <h3>{props.task.title}</h3>
      <p>{props.task.complited}</p>
    </div>
  );
}

export default Task;
