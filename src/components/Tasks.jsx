import { ChevronRightCircleIcon, TrashIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Button from "./Button";
function Tasks(props) {
  console.log(props);
  const navigate = useNavigate();
  function onSeeDetalhesClick(task) {
    const query = new URLSearchParams();
    query.set("title", task.title);
    query.set("description", task.description);

    navigate(`/task?title=${task.title}&description=${task.description}`);
  }
  return (
    <ul className="space-y-4 p-6 bg-slate-200 rounded-md shadow ">
      {props.tasks.map((task) => (
        <li key={task.id} className="flex gap-2">
          <button
            onClick={() => props.onTaskClick(task.id)}
            className={`bg-slate-400 text-left text-white p-2 rounded-md w-full ${
              task.isCompleted && "line-through"
            }`}
          >
            {task.title}
          </button>
          <Button onClick={() => onSeeDetalhesClick(task)}>
            <ChevronRightCircleIcon />
          </Button>
          <Button onClick={() => props.deleteTaskClick(task.id)}>
            <TrashIcon />
          </Button>
        </li>
      ))}
    </ul>
  );
}

export default Tasks;
