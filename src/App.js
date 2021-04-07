import React,{useEffect, useMemo, useState, useCallback} from 'react';

function App() {
  const [tarefas,setTarefas] = useState([
    "Pagar conta",
    "Estudar react"
  ]);
  const [item,setItems] = useState('');

  useEffect(() =>{//chama qd monta a tela
    console.log("carregou tela")
    const tarefasStorange = localStorage.getItem('tarefas')
    if(tarefasStorange){
      setTarefas(JSON.parse(tarefasStorange))
    }
  },[])

  useEffect(() =>{//chama qd modifica tarefas
    console.log("mudou tarefas")
    localStorage.setItem('tarefas',JSON.stringify(tarefas))
  },[tarefas])

  const handleAdd= useCallback(()=>{
    console.log("handleAdd")
    setTarefas([...tarefas,item])
    setItems('')
  },[tarefas,item])
  
  // atualiza se houver alteracao no tarefas
  const totaltarefas= useMemo(()=>tarefas.length,[tarefas]);


  return (
    <div className="App">
      <ul>
        {tarefas.map(tarefa =>(
          <li key={tarefa}>{tarefa}</li>
        ))}
      </ul>
      <strong>Você tem {totaltarefas} tarefas</strong><br/>
      <input type="text" value={item} onChange={(e)=>setItems(e.target.value)}/>
      <button type="button" onClick={handleAdd}> adicionar</button>
    </div>
  );
}

export default App;
