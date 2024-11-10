import TaskItem from './TaskItem';

export default function TaskList({ tasks, updateTask, deleteTask, toggleCompleteTask }) {
  return (
    <ul>
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          updateTask={updateTask}
          deleteTask={deleteTask}
          toggleCompleteTask={toggleCompleteTask}
        />
      ))}
    </ul>
  );
}
