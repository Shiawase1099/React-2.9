import { useState } from 'react';
import TaskList from './TaskList';
import NewTaskForm from './NewTaskForm';
import Footer from './Footer';

function App() {
  const tasks = [
    {
      id: 1,
      description: 'Completed task',
      completed: true,
      createdAt: new Date(),
    },
    {
      id: 2,
      description: 'Editing task',
      completed: false,
      createdAt: new Date(),
    },
    {
      id: 3,
      description: 'Active task',
      completed: false,
      createdAt: new Date(),
    },
  ];

  return (
    <section className="todoapp">
      <NewTaskForm />

      <section className="main">
        <TaskList tasks={tasks} />
        <Footer tasks={tasks} />
      </section>
    </section>
  );
}

function TaskList({ tasks, onToggle }) {
  return (
    <ul className="todo-list">
      {tasks.map((task) => (
        <li key={task.id} className={task.completed ? "completed" : ""}>
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => onToggle(task.id)}
          />
          {task.text}
        </li>
      ))}
    </ul>
  );
}

export default App;