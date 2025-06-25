import { use } from "react";
import { useState } from "react";
import Input from "./input";

function AddTask(props) {
  const [titulo, setTitulo] = useState("");
  const [descricao, setDescricao] = useState("");
  return (
    <div className="space-y-4 p-6 bg-slate-200 rounded-md shadow flex flex-col ">
      <Input
        type="text"
        placeholder="Titulo"
        value={titulo}
        onChange={(event) => setTitulo(event.target.value)}
      />
      <Input
        type="text"
        placeholder="descrição"
        value={descricao}
        onChange={(event) => setDescricao(event.target.value)}
      />
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
