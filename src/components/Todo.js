import React, { useState } from "react";

import "./Todo.css";

function Task({ task }) {
  return (
    <div
      className="task"
      style={{ textDecoration: task.completed ? "line-through" : "" }}
    >
      {task.title}
    </div>
  );
}

function Todo() {
  const [tasks, setTasks] = useState([
    { title: "Prep for food", completed: true },
    { title: "Work on personal projects", completed: false },
    { title: "Paint something fun!", completed: false },
  ]);

  return(<div className='todo-container'>
      <div className='header'>
          TODO-ITEMS
      </div>
      <div className='tasks'>
          {tasks.map((task,index)=>(
              <Task
                task={task}
                index={index}
                key={index}
              />
          ))}
      </div>
  </div>)
}

export default Todo;