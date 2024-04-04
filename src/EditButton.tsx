type EditTaskProps = {
  setIsEditTrue: React.Dispatch<React.SetStateAction<boolean>>;
  setEditTaskId: React.Dispatch<React.SetStateAction<number>>;
  id: number;
};

const EditButton = ({ setIsEditTrue, id, setEditTaskId }: EditTaskProps) => {
  return (
    <button
      onClick={() => {
        setIsEditTrue(true);
        setEditTaskId(id);
      }}
    >
      Edit
    </button>
  );
};

export default EditButton;
