import React, { useState } from "react";
import CreateTask from "./CreateTask";
import "./Todo.css";

function Task({ task, index, completeTask, removeTask }) {
  return (
    <div
      className="task"
      style={{ textDecoration: task.completed ? "line-through" : "" }}
    >
      {task.title}
      <button style={{ background: "red" }} onClick={() => removeTask(index)}>x</button>
      <button onClick={() => completeTask(index)}>Complete</button>
    </div>
  );
}

function Todo() {
  const [tasks, setTasks] = useState([
    { title: "Prep for food", completed: true },
    { title: "Work on personal projects", completed: false },
    { title: "Paint something fun!", completed: false },
  ]);

  const addTask = (title) => {
    const newTasks = [...tasks, { title, completed: false }];
    setTasks(newTasks);
  };

  const completeTask = (index) => {
    const newTasks = [...tasks];
    newTasks[index].completed = true;
    setTasks(newTasks);
  };

  const removeTask = (index) => {
      const newTasks = [...tasks];
      newTasks.splice(index,1);
      setTasks(newTasks);
  }

  return (
    <div className="todo-container">
      <div className="header">TODO-ITEMS</div>
      <div className="tasks">
        {tasks.map((task, index) => (
          <Task
            task={task}
            index={index}
            key={index}
            completeTask={completeTask}
            removeTask={removeTask}
          />
        ))}
      </div>
      <div className="create-task">
        <CreateTask addTask={addTask} />
      </div>
    </div>
  );
}

export default Todo;
