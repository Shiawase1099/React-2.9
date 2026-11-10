import Task from './Task';

function TaskList({ tasks, onToggleTask, onDeleteTask, onRenameTask }) {
  return (
    <ul className="todo-list">
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          onToggle={() => onToggleTask(task.id)}
          onDelete={() => onDeleteTask(task.id)}
          onRename={(description) => onRenameTask(task.id, description)}
        />
      ))}
    </ul>
  );
}

export default TaskList;