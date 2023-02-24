import React from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../../redux/actions";

const Form = () => {
  const dispatch = useDispatch();
  console.log(dispatch);

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = e.target.elements.task.value;
    dispatch(addTask(text));
    console.log(text);
    e.target.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Введіть задачу: <input type="text" name="task" />
      </label>
      <button type="submit">Підтвердити</button>
    </form>
  );
};

export default Form;
