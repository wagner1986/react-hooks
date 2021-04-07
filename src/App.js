import React,{useState} from 'react';

function App() {
  const [tarefas,setTarefas] = useState([
    "Pagar conta",
    "Estudar react"
  ]);
  const [item,setItems] = useState('');

  function handleAdd(){
    console.log('adicionando');
    setTarefas([...tarefas,item])
  }

  return (
    <div className="App">
      <ul>
        {tarefas.map(tarefa =>(
          <li key={tarefa}>{tarefa}</li>
        ))}
      </ul>
      <input type="text" value={item} onChange={(e)=>setItems(e.target.value)}/>
      <button type="button" onClick={handleAdd}> adicionar</button>
    </div>
  );
}

export default App;
