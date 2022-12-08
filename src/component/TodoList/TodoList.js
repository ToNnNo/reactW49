import { useSelector, useDispatch } from 'react-redux';
import { remove } from '../../slice/todoSlice';

export default function TodoList() {
  const tasks = useSelector( (state) => state.todolist.tasks )
  const dispatch = useDispatch();

  const style = {
    display: 'flex',
    justifyContent: 'space-between',
    listStyleType: 'none',
    marginBottom: '5px'
  }

  return (
    <ul style={{padding: 0, margin: 0}}>
      { tasks.map( (task, index) => (
        <li key={index} style={style}>
          { task } 
          <button onClick={ () => { dispatch( remove({index}) ) } }>Supprimer</button> 
        </li> 
      )) }
    </ul>
  )
}