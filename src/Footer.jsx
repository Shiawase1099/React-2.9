import TasksFilter from './TasksFilter';

function Footer({ tasks }) {
  const activeTasks = tasks.filter(
    (task) => !task.completed,
  ).length;

  return (
    <footer className="footer">
      <span className="todo-count">
        {activeTasks} items left
      </span>

      <TasksFilter />

      <button className="clear-completed">
        Clear completed
      </button>
    </footer>
  );
}

export default Footer;