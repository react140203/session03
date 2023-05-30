//rafc <- snippet es7+
import React, { useState } from "react";

interface ITask {
  id: number;
  title: string;
  done: boolean;
}
const taskListInit = [
  { id: 1, title: "One", done: true },
  { id: 2, title: "iki", done: false },
  { id: 3, title: "se", done: false },
  { id: 4, title: "quad", done: true },
];

export const TaskList = () => {
  //   //value, reference
  //   const x = [1, 2, 3]; //ref1
  //   const y = [1, 2, 3]; //ref2
  //   const a = (a: number, b: number) => a + b;
  //   const b = (a: number, b: number) => a + b;
  //   console.log(x === y);
  //   console.log(a === b);

  //   //x = [1,2,3];
  //   x.push(4);
  //   x[0] = 0;
  //   console.log(x);

  const [taskList, setTaskList] = useState(taskListInit);
  const toggle = (task: ITask) => {
    task.done = !task.done;
    setTaskList(taskList);
    console.log(taskList);
  };
  return (
    <>
      <div>TaskList</div>
      <ul>
        {taskList.map((task) => (
          <li key={task.id}>
            <input
              type="checkbox"
              checked={task.done}
              onChange={() => toggle(task)}
            />
            {task.title}
          </li>
        ))}
      </ul>
    </>
  );
};
