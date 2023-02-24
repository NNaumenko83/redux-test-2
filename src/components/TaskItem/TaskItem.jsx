import React from "react";

import { useDispatch } from "react-redux";
import { deleteTask } from "../../redux/tasksSlice";

const TaskItem = ({ task }) => {
  const dispatch = useDispatch();

  const onHandleButtonClick = (e) => {
    console.log(e.target.id);
    dispatch(deleteTask(e.target.id));
  };

  return (
    <li>
      {task.task}
      <button id={task.id} onClick={onHandleButtonClick}>
        Delete
      </button>
    </li>
  );
};

export default TaskItem;
