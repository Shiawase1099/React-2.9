import { useState } from 'react';
import TaskList from './TaskList';
import NewTaskForm from './NewTaskForm';
import Footer from './Footer';

function App() {
  const [tasks, setTasks] = useState([
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
  ]);

  function toggleTask(taskId) {
    setTasks((currentTasks) =>
      currentTasks.map((task) =>
        task.id === taskId
          ? { ...task, completed: !task.completed }
          : task,
      ),
    );
  }

  function deleteTask(taskId) {
    setTasks((currentTasks) =>
      currentTasks.filter((task) => task.id !== taskId),
    );
  }

  function renameTask(taskId, description) {
    setTasks((currentTasks) =>
      currentTasks.map((task) =>
        task.id === taskId ? { ...task, description } : task,
      ),
    );
  }

  return (
    <section className="todoapp">
      <NewTaskForm />

      <section className="main">
        <TaskList
          tasks={tasks}
          onToggleTask={toggleTask}
          onDeleteTask={deleteTask}
          onRenameTask={renameTask}
        />
        <Footer tasks={tasks} />
      </section>
    </section>
  );
}

export default App;