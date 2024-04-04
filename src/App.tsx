import React from 'react';
import { Task } from './types';
import AddTask from './AddTask';
import TaskList from './TaskList';
import TaskListItem from './TaskListItem';
import TaskListHeader from './TaskListHeader';
import EditButton from './EditButton';
import DeleteButton from './DeleteButton';
import EditBox from './EditBox';

function App() {
  const [tasks, setTasks] = React.useState<Task[]>([]);

  const [isEditTask, setIsEditTask] = React.useState(false);
  const [editTaskid, setEditTaskId] = React.useState(0);

  const onAddTask = (taskName: string) => {
    const trimmedTaskName = taskName.trim();

    if (!trimmedTaskName) {
      return;
    }

    setTasks([
      ...tasks,
      {
        id: new Date().getTime(), // Not a great way to generate IDs
        title: trimmedTaskName,
        isCompleted: false,
      },
    ]);
  };

  const onDeleteTask = (taskid: number) => {
    const otherTasks = tasks.filter((task) => taskid != task.id);
    setTasks(otherTasks);
  };

  const onEditTask = (taskName: string, taskid: number) => {
    const trimmedTaskName = taskName.trim();

    if (!trimmedTaskName) {
      return;
    }

    const otherTasks = tasks.filter((task) => taskid != task.id);

    setTasks([
      ...otherTasks,
      {
        id: taskid, // Not a great way to generate IDs
        title: trimmedTaskName,
        isCompleted: false,
      },
    ]);

    setIsEditTask(false);
  };

  return (
    <div>
      <h1>Tasks</h1>
      <AddTask onAddTask={onAddTask} />
      <TaskList header={<TaskListHeader count={tasks.length} />}>
        {tasks.map((task) => (
          <>
            <TaskListItem key={task.id}>
              {editTaskid != task.id || !isEditTask ? (
                <div>{task.title}</div>
              ) : (
                <EditBox
                  isEditTrue={isEditTask}
                  id={task.id}
                  title={task.title}
                  onEditTask={onEditTask}
                />
              )}
            </TaskListItem>

            <EditButton
              setIsEditTrue={setIsEditTask}
              id={task.id}
              setEditTaskId={setEditTaskId}
              key={task.id}
            />
            <DeleteButton
              id={task.id}
              key={task.id}
              onDeleteTask={onDeleteTask}
            />
          </>
        ))}
      </TaskList>
    </div>
  );
}

export default App;
