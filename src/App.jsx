import AddTask from "./components/AddTask";
import Tasks from "./components/tasks";
import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Tarefa 1",
      description: "Descrição da tarefa 1",
      isCompleted: false,
    },
    {
      id: 2,
      title: "Tarefa 2",
      description: "Descrição da tarefa 2",
      isCompleted: false,
    },
    {
      id: 3,
      title: "Tarefa 3",
      description: "Descrição da tarefa 3",
      isCompleted: false,
    },
  ]);

  function onTaskClick(idTask) {
    const newTask = tasks.map((task) => {
      if (task.id === idTask) {
        return { ...task, isCompleted: !task.isCompleted }; //verifica se esta completa
      }
      return task;
    });
    setTasks(newTask);
  }
  function deleteTaskClick(idTask) {
    const newTasks = tasks.filter((task) => task.id !== idTask);
    setTasks(newTasks);
  }

  function adicionarTaskClick(titulo, descricao) {
    const newTask = {
      id: tasks.length + 1,
      title: titulo,
      description: descricao,
    };
    setTasks([...tasks, newTask]);
  }

  return (
    <div className="w-screen h-screen bg-slate-600 flex justify-center p-6">
      <div className="w-[500px] space-y-4 ">
        <h1 className="text-3xl text-slate-100 font-bold text-center">
          Gereciador de tarefas
        </h1>
        <Tasks
          tasks={tasks}
          onTaskClick={onTaskClick}
          deleteTaskClick={deleteTaskClick}
        />
        <AddTask adicionarTaskClick={adicionarTaskClick} />
      </div>
    </div>
  );
}

export default App;
