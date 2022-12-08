import CounterRedux from "../component/CounterRedux";
import { useSelector } from 'react-redux';

export default function Redux() {
  const counter = useSelector( (state) => state.counter );

  return (
    <>
      <h2>Présentation de Redux</h2>

      <p>Compteur <small>Page Redux</small>: { counter.value }</p>

      <CounterRedux />
    </>
  );
}