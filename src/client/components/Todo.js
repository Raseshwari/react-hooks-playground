import React, { useState, useEffect } from "react";
import Task from './Task';
import CreateTask from "./CreateTask";
import "./Todo.css";

function Todo() {
  const [tasksPending, setTasksPending] = useState(0);
  const [tasks, setTasks] = useState([
    { title: "Prep for food", completed: true },
    { title: "Work on personal projects", completed: false },
    { title: "Paint something fun!", completed: false },
  ]);

  useEffect(()=>{
      setTasksPending(tasks.filter(task=> !task.completed).length)
  });

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
      <div className="header">Pending Tasks ({tasksPending})</div>
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
