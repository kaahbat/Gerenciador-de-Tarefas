import { use } from "react";
import { useState } from "react";

function AddTask(props) {
  const [titulo, setTitulo] = useState("");
  const [descricao, setDescricao] = useState("");
  return (
    <div className="space-y-4 p-6 bg-slate-200 rounded-md shadow flex flex-col ">
      <input
        type="text"
        placeholder="Titulo"
        className=" border-slate-300  outline-slate-400 px-4 py-2 rounded-md "
        value={titulo}
        onChange={(event) => setTitulo(event.target.value)}
      ></input>
      <input
        type="text"
        placeholder="descrição"
        className=" border-slate-300  outline-slate-400 px-4 py-2 rounded-md "
        value={descricao}
        onChange={(event) => setDescricao(event.target.value)}
      ></input>
      <button
        className="bg-slate-500 text-white px-4 py-2 rounded-md font-medium"
        onClick={() => {
          if (!titulo.trim() || !descricao.trim()) {
            return alert("campos vazios");
          }
          props.adicionarTaskClick(titulo, descricao);
          setTitulo("");
          setDescricao("");
        }}
      >
        Adicionar tarefa
      </button>
    </div>
  );
}

export default AddTask;
