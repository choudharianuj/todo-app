import React from 'react';

type EditTaskProps = {
  onEditTask: (taskName: string, id: number) => void;
  isEditTrue: boolean;
  title: string;
  id: number;
};

const EditBox = ({ onEditTask, isEditTrue, title, id }: EditTaskProps) => {
  const [taskName, setTaskName] = React.useState(title);

  const handleEditTask = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const trimmedTaskName = taskName.trim();

    if (!trimmedTaskName) {
      return;
    }
    onEditTask(trimmedTaskName, id);
  };

  return (
    <>
      {isEditTrue && (
        <form onSubmit={handleEditTask}>
          <label htmlFor="task-edit-input">Edit Task: </label>
          <input
            required
            id="task-edit-input"
            value={taskName}
            onChange={(e) => setTaskName(e.target.value)}
          />
          <button type="submit">Done</button>
        </form>
      )}
    </>
  );
};

export default EditBox;
