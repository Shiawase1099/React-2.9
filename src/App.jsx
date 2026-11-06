import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
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

export default App;