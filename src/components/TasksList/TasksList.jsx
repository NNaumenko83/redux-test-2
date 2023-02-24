import React from "react";
import { useSelector } from "react-redux";
import { getTasks } from "../../redux/tasksSlice";
import TaskItem from "../TaskItem";

const TasksList = () => {
  const tasks = useSelector(getTasks);

  return (
    <ul>
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </ul>
  );
};

export default TasksList;
