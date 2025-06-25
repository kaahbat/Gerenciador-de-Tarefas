import { ChevronLeftIcon } from "lucide-react";
import { useNavigate, useSearchParams } from "react-router-dom";

function TaskPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const titulo = searchParams.get("title");
  const descricao = searchParams.get("description");

  return (
    <div className="h-screen w-screen bg-slate-500 p-6">
      <div className="w-[500px] space-y-4 ">
        <div className="flex justify-center relative mb-6">
          <button
            onClick={() => navigate(-1)}
            className=" absolute left-0 top-0 bottom-0 text-slate-100"
          >
            <ChevronLeftIcon />
          </button>
          <h1 className="text-3xl text-slate-100 font-bold text-center">
            Detalhes da Tarefa
          </h1>
        </div>
        <div className=" bg-slate-200 p-4 rounded-md">
          <h2 className=" text-xl text-slate-600 font-bold ">{titulo}</h2>
          <h2 className="text-slate-600 ">{descricao}</h2>
        </div>
        <button></button>
      </div>
    </div>
  );
}

export default TaskPage;
