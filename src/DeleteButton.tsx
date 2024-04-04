import React from 'react';

type DeleteTaskProps = {
  onDeleteTask: (id: number) => void;
  id: number;
};

const DeleteButton = ({ id, onDeleteTask }: DeleteTaskProps) => {
  return (
    <button
      onClick={() => {
        onDeleteTask(id);
      }}
    >
      Delete
    </button>
  );
};

export default DeleteButton;
