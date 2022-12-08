import CounterRedux from "../component/CounterRedux";
import { useSelector } from 'react-redux';
import TodoList from "../component/TodoList/TodoList";
import TodoForm from "../component/TodoList/TodoForm";

export default function Redux() {
  const counter = useSelector( (state) => state.counter );

  return (
    <>
      <h2>Présentation de Redux</h2>

      <p>Compteur <small>Page Redux</small>: { counter.value }</p>

      <CounterRedux />

      <h3>Todo List</h3>

      <div className="row">
        <div className="col-4">
          <TodoList />
        </div>
        <div className="col-8">
          <TodoForm />
        </div>
      </div>

      {/* 
        push() -> ajouter une valeur dans le tableau
        splice(index, qte) -> retirer une valeur dans un tableau en utilisant son index
        findIndex( (v) => { return v == ... } ) -> trouver l'index d'une valeur
      */}

    </>
  );
}