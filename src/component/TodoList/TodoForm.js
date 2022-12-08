import { useRef, useState } from "react";
import { useDispatch } from 'react-redux';
import { add } from "../../slice/todoSlice";

export default function TodoForm() {
  const [task, setTask] = useState('');
  const [error, setError] = useState(false);
  const dispatch = useDispatch();
  const input = useRef();

  function changeData(e) {
    setTask(e.target.value);
    setError(false);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setError(task.trim() === '');
    
    if( task.trim() !== '' ) { // si le n'est pas vide
      dispatch( add({ task }) );
      setTask('');
      input.current.focus(); // donne le focus au champs input(task)
      setError(false);
    }
  }

  const formControl = {
    border: "1px solid #ccc",
    color: "#333",
    fontFamily: 'inherit',
    fontSize: '1rem',
    padding: '5px 7px',
    width: '100%',
    borderRadius: '3px'
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input type="text" name="task" style={formControl} placeholder="Saisir une tache à réaliser" 
          value={task} onChange={changeData} ref={input} />
        { error && <p>Ce champs ne peut pas être vide</p>}
      </div>
      <button>Ajouter</button>
    </form>
  )  

}