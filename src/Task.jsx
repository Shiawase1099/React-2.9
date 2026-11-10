import { useState } from 'react';

function Task({ task, onToggle, onDelete, onRename }) {
  const [isEditing, setIsEditing] = useState(false);
  const [description, setDescription] = useState(task.description);

  function handleKeyDown(event) {
    if (event.key === 'Enter') {
      const newDescription = description.trim();

      if (newDescription) {
        onRename(newDescription);
      } else {
        setDescription(task.description);
      }

      setIsEditing(false);
    }

    if (event.key === 'Escape') {
      setDescription(task.description);
      setIsEditing(false);
    }
  }

  return (
    <li
      className={`${task.completed ? 'completed' : ''}${
        isEditing ? ' editing' : ''
      }`}
    >
      <div className="view">
        <input
          className="toggle"
          type="checkbox"
          checked={task.completed}
          onChange={onToggle}
          aria-label={`Mark "${task.description}" as ${
            task.completed ? 'active' : 'completed'
          }`}
        />

        <label>
          <span className="description">{task.description}</span>
        </label>

        <button
          className="icon icon-edit"
          type="button"
          aria-label={`Edit ${task.description}`}
          onClick={() => {
            setDescription(task.description);
            setIsEditing(true);
          }}
        />

        <button
          className="icon icon-destroy"
          type="button"
          aria-label={`Delete ${task.description}`}
          onClick={onDelete}
        />
      </div>

      {isEditing && (
        <input
          className="edit"
          value={description}
          autoFocus
          aria-label="Edit task name"
          onChange={(event) => setDescription(event.target.value)}
          onKeyDown={handleKeyDown}
        />
      )}
    </li>
  );
}

export default Task;